from flask import Flask, render_template, request, redirect, url_for, session, jsonify
import random

app = Flask(__name__)
app.secret_key = 'supersegreto'  # serve per le sessioni

# Codice di accesso
ACCESS_CODE = "13112005"

# Funzione per leggere le domande dal file
def load_questions():
    questions = []
    with open('domandetest2.txt', 'r', encoding='utf-8') as f:
        lines = f.readlines()
        i = 0
        while i < len(lines):
            line = lines[i].strip()
            if line.endswith('*') and not line.startswith(' '):  # inizio domanda
                question_text = line.rstrip('*').strip()
                answers = []
                i += 1
                while i < len(lines) and lines[i].strip() != '':
                    ans_line = lines[i].strip()
                    if ans_line != '':
                        is_correct = ans_line.endswith('*')
                        answer_text = ans_line.rstrip('*').strip()
                        answers.append({'text': answer_text, 'correct': is_correct})
                    i += 1
                questions.append({'question': question_text, 'answers': answers})
            else:
                i += 1
    return questions

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        code = request.form.get('code')
        if code == ACCESS_CODE:
            session['logged_in'] = True
            return redirect(url_for('quiz'))
        else:
            return render_template('index.html', error="Codice errato")
    return render_template('index.html')

@app.route('/quiz')
def quiz():
    if not session.get('logged_in'):
        return redirect(url_for('index'))

    questions = load_questions()
    random.shuffle(questions)  # ordine casuale
    for q in questions:
        random.shuffle(q['answers'])
    return render_template('quiz.html', questions=questions)

# Endpoint per verificare risposta in tempo reale
@app.route('/check_answer', methods=['POST'])
def check_answer():
    data = request.json
    correct = data.get('correct')
    return jsonify({'result': 'corretta' if correct else 'sbagliata'})

if __name__ == '__main__':
    app.run(debug=True)
