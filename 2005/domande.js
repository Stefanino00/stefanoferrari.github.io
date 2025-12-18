const domandeQuiz = [
  {
    "id": 1,
    "domanda": "Per il motore asincrono la coppia nominale:",
    "risposte": {
      "A": "È la coppia massima erogabile dal motore",
      "B": "È il valore di coppia continuativa alla velocità nominale",
      "C": "È la coppia massima erogabile alla velocità nominale",
      "D": "È il valore di coppia continuativa a rotore bloccato",
      "E": "È la massima coppia alla velocità massima"
    },
    "corretta": "B",
    "spiegazione": "La coppia nominale rappresenta il carico meccanico che il motore può sopportare in modo continuativo senza surriscaldarsi eccessivamente, operando alla sua velocità di progetto (nominale)."
  },
  {
    "id": 2,
    "domanda": "La limitazione di velocità massima del campo operativo di un azionamento con motore cc è dovuta:",
    "risposte": {
      "A": "Alla massima corrente",
      "B": "All'alimentatore",
      "C": "Ai cuscinetti",
      "D": "Al rischio di centrifugazione dei magneti permanenti",
      "E": "Alla massima pressione"
    },
    "corretta": "C",
    "spiegazione": "Mentre la coppia è limitata termicamente, la velocità massima è spesso dettata da vincoli meccanici come la tenuta dei cuscinetti o la stabilità del collettore alle alte rotazioni."
  },
  {
    "id": 3,
    "domanda": "Quale/i delle seguenti affermazioni sul termine Automazione NON è corretta:",
    "risposte": {
      "A": "Indica l'impiego di mezzi artificiali che operano in modo autonomo per svolgere compiti di interesse economico o sociale",
      "B": "Consente di svolgere attività non possibili all'uomo",
      "C": "Si riferisce alla possibilità di rispondere automaticamente alla variazione della domanda",
      "D": "È stato usato per la prima volta nel 1948"
    },
    "corretta": "C",
    "spiegazione": "L'automazione riguarda l'esecuzione autonoma di compiti. Rispondere alla variazione della domanda è invece un concetto legato alla flessibilità produttiva e alla gestione aziendale, non alla definizione tecnica di automazione."
  },
  {
    "id": 4,
    "domanda": "Il modello che abbiamo utilizzato nello studio del comportamento termico del motore:",
    "risposte": {
      "A": "È relativo a un sistema del secondo ordine",
      "B": "Considera due diversi materiali",
      "C": "Considera la variazione di temperatura tra rotore e statore",
      "D": "Considera un unico materiale",
      "E": "Si basa anche sull'ipotesi che la temperatura nel motore sia uguale in ogni punto"
    },
    "corretta": "D",
    "spiegazione": "Nel modello termico semplificato (del primo ordine), il motore viene considerato come un corpo omogeneo costituito da un unico materiale con una capacità termica uniforme."
  },
  {
    "id": 5,
    "domanda": "La costante di tempo termica di un motore elettrico, secondo il modello visto:",
    "risposte": {
      "A": "È dell'ordine di minuti, decine di minuti",
      "B": "È il prodotto di resistenza termica per capacità termica",
      "C": "Assume valori molto bassi (dell'ordine dei secondi)",
      "D": "È uguale per tutti i motori",
      "E": "Non dipende dalla massa del motore"
    },
    "corretta": "B",
    "spiegazione": "Analogamente ai circuiti elettrici RC, la costante di tempo termica $\tau$ è data dal prodotto della resistenza termica $R_{th}$ (capacità di dissipare) e la capacità termica $C_{th}$ (capacità di accumulare calore)."
  },
  {
    "id": 6,
    "domanda": "La principale causa di dissipazione di energia in un motore elettrico è:",
    "risposte": {
      "A": "La dissipazione dovuta agli attriti",
      "B": "La dissipazione negli avvolgimenti di rame (Effetto Joule)",
      "C": "La dissipazione dovuta all'isteresi dei materiali ferromagnetici",
      "D": "La dissipazione nel ferro (correnti parassite di Foucault)",
      "E": "Lo scambio termico con l'esterno"
    },
    "corretta": "B",
    "spiegazione": "Le perdite nel rame per effetto Joule ($P = R \cdot I^2$) sono solitamente le più significative e determinano il riscaldamento principale del motore durante il funzionamento."
  },
  {
    "id": 7,
    "domanda": "La resistenza termica di un motore elettrico (seleziona più risposte):",
    "risposte": {
      "A": "A pari taglia, in un brushless è superiore rispetto ad un motore cc a collettore",
      "B": "Esprime la capacità di immagazzinare calore",
      "C": "A pari taglia, in un asincrono è inferiore rispetto ad un motore cc a collettore",
      "D": "Esprime la capacità del motore di dissipare calore",
      "E": "A pari taglia, in un brushless è inferiore rispetto ad un asincrono"
    },
    "corretta": "C, D, E",
    "spiegazione": "La resistenza termica indica quanto il motore si oppone al passaggio di calore verso l'esterno. Motori come i brushless o gli asincroni dissipano meglio (resistenza minore) perché hanno gli avvolgimenti sullo statore, a contatto con la carcassa."
  },
  {
    "id": 8,
    "domanda": "Aumentando la tensione di alimentazione di un motore cc la curva caratteristica:",
    "risposte": {
      "A": "Ruota",
      "B": "Diventa orizzontale",
      "C": "Trasla verso destra",
      "D": "Diventa verticale",
      "E": "Trasla verso sinistra"
    },
    "corretta": "C",
    "spiegazione": "Aumentando la tensione $V$, aumenta la velocità a vuoto del motore. La pendenza della retta (caratteristica meccanica) rimane invariata, quindi la curva trasla parallelamente verso velocità più alte (destra)."
  },
  {
    "id": 9,
    "domanda": "Tra gli effetti dell'automazione rigida NON troviamo:",
    "risposte": {
      "A": "Miglioramento degli indici di qualità della produzione",
      "B": "Possibilità di operare su vasti assortimenti",
      "C": "Operazioni più veloci e controllabili",
      "D": "Riduzione dei tempi di produzione",
      "E": "Sostituzione dell'uomo in operazioni ripetitive e/o disagevoli"
    },
    "corretta": "B",
    "spiegazione": "L'automazione rigida è progettata per produrre grandi volumi di un singolo prodotto. La varietà (vasti assortimenti) è l'opposto della rigidità e richiede automazione flessibile."
  },
  {
    "id": 10,
    "domanda": "In un azionamento con motore cc la regolazione che consente le migliori prestazioni dinamiche è:",
    "risposte": {
      "A": "La regolazione sulla resistenza di armatura",
      "B": "La regolazione di tensione",
      "C": "La regolazione di induttanza",
      "D": "La regolazione di frequenza",
      "E": "La regolazione di corrente"
    },
    "corretta": "E",
    "spiegazione": "Poiché la coppia è direttamente proporzionale alla corrente ($\tau = K_t \cdot I$), controllare direttamente la corrente permette di gestire istantaneamente la coppia e quindi ottenere accelerazioni molto rapide."
  },
  {
    "id": 11,
    "domanda": "La classe di isolamento di un motore elettrico:",
    "risposte": {
      "A": "Rappresenta l'isolamento termico del motore dall'ambiente circostante",
      "B": "È dichiarata dal costruttore",
      "C": "Rappresenta la massima temperatura ammissibile per i magneti del motore",
      "D": "Rappresenta il valore massimo di sovratemperatura oltre il quale si perde l'isolamento elettrico degli avvolgimenti del motore",
      "E": "Varia con la massa del motore"
    },
    "corretta": "D",
    "spiegazione": "La classe di isolamento indica la temperatura massima che i materiali isolanti degli avvolgimenti possono sopportare prima di degradarsi e causare un corto circuito."
  },
  {
    "id": 12,
    "domanda": "L'esigenza di flessibilità nell'automazione è determinata da:",
    "risposte": {
      "A": "Difficoltà di previsione della domanda",
      "B": "Esigenza di avere volumi produttivi elevati",
      "C": "Rapida evoluzione e breve vita dei prodotti",
      "D": "Necessità di produrre con cadenza produttive molto elevate",
      "E": "Aumentare i volumi produttivi"
    },
    "corretta": "A",
    "spiegazione": "In mercati incerti dove la domanda cambia velocemente, le aziende hanno bisogno di sistemi produttivi capaci di riconfigurarsi rapidamente per non restare con scorte invendute."
  },
  {
    "id": 13,
    "domanda": "Quale delle seguenti affermazioni sui motori CC NON è corretta:",
    "risposte": {
      "A": "In un motore corrente continua il circuito di armatura è nel rotore",
      "B": "In un motore corrente continua viene indotta una forza contro-elettromotrice nel rotore",
      "C": "Un motore corrente continua a campo avvolto sullo statore ha avvolgimenti",
      "D": "Un motore corrente continua necessita di un trasduttore di posizione",
      "E": "In un motore corrente continua sullo statore ci possono essere magneti"
    },
    "corretta": "D",
    "spiegazione": "A differenza dei motori brushless (che necessitano di sensori per sapere quando commutare le fasi), il motore CC a spazzole commuta meccanicamente grazie al collettore, quindi può girare anche senza sensori di posizione."
  },
  {
    "id": 14,
    "domanda": "In un motore cc una frenatura di emergenza elettrica può essere fatta:",
    "risposte": {
      "A": "Togliendo tensione",
      "B": "Chiudendo il circuito di armatura su una resistenza di frenatura",
      "C": "Mettendo in corto circuito il circuito rotorico",
      "D": "Riducendo la tensione",
      "E": "Aumentando la tensione"
    },
    "corretta": "B",
    "spiegazione": "Dissipando l'energia cinetica del rotore su una resistenza esterna (frenatura reostatica), il motore agisce come un generatore caricato, producendo una coppia frenante che arresta il moto rapidamente."
  },
  {
    "id": 15,
    "domanda": "Indicare le affermazioni che sono corrette per un motore cc (Collettore):",
    "risposte": {
      "A": "Il collettore consente di alimentare il circuito di statore",
      "B": "Le spazzole ruotano con il rotore",
      "C": "Il sistema collettore spazzole aumenta l'affidabilità del motore",
      "D": "Il collettore è un cilindro con lamelle di rame separate l'una dall'altra da isolante",
      "E": "Limita la massima potenza erogabile"
    },
    "corretta": "D, E",
    "spiegazione": "Il collettore è l'organo meccanico rotante che permette l'alimentazione del rotore (D). Tuttavia, a causa dell'usura delle spazzole e delle scintille, limita la velocità e la potenza massima gestibile (E)."
  },
  {
    "id": 16,
    "domanda": "L'automazione programmabile:",
    "risposte": {
      "A": "Consente flessibilità operativa",
      "B": "Consente flessibilità di riconfigurazione",
      "C": "Si implementa quando i volumi produttivi sono molto elevati",
      "D": "È caratterizzata da una sequenza di operazioni fissa",
      "E": "Si implementa quando i volumi produttivi sono medio-bassi"
    },
    "corretta": "A, E",
    "spiegazione": "L'automazione programmabile (come i robot industriali) è ideale per lotti medi o piccoli dove è necessario cambiare spesso il compito (A) ed è economicamente vantaggiosa per volumi non eccessivi (E)."
  },
  {
    "id": 17,
    "domanda": "La flessibilità operativa:",
    "risposte": {
      "A": "Consente di produrre diversi codici di uno stesso prodotto senza arrestare la produzione",
      "B": "Consente di aumentare la cadenza produttiva",
      "C": "Rappresenta la capacità di un sistema produttivo di adeguarsi a cambiamenti tecnologici",
      "D": "È una caratteristica di un sistema di produzione programmabile",
      "E": "È una caratteristica di un sistema di produzione rigido"
    },
    "corretta": "A, D",
    "spiegazione": "È la capacità di gestire varianti di prodotto 'al volo' (A). È tipica dei sistemi programmabili che possono variare la loro sequenza tramite software (D)."
  },
  {
    "id": 18,
    "domanda": "Tra le grandezze elettriche che possiamo variare in un motore cc per ottenere il campo operativo troviamo:",
    "risposte": {
      "A": "La corrente",
      "B": "La resistenza del circuito rotorico di armatura",
      "C": "L'induttanza",
      "D": "La tensione",
      "E": "La riluttanza"
    },
    "corretta": "D",
    "spiegazione": "La tensione di armatura è la variabile principale usata per regolare la velocità del motore CC. Variandola, si sposta il punto di lavoro lungo l'asse delle ordinate del diagramma coppia-velocità."
  },
  {
    "id": 19,
    "domanda": "Quale/i delle seguenti affermazioni sui motori CC a collettore NON è/sono corretta/e:",
    "risposte": {
      "A": "Sullo statore ci sono molte spire per avere una coppia indipendente dall'angolo",
      "B": "Gli avvolgimenti sul rotore sono alimentati da una corrente trifase",
      "C": "Le spazzole possono generare scintille a causa della commutazione meccanica",
      "D": "Il collettore è solidale al rotore"
    },
    "corretta": "A, B",
    "spiegazione": "Falso: le spire per la costanza della coppia sono sul rotore, non sullo statore (A). Gli avvolgimenti del rotore sono alimentati in corrente continua, che viene commutata meccanicamente, non trifase (B)."
  },
  {
    "id": 20,
    "domanda": "La capacità termica di un motore elettrico:",
    "risposte": {
      "A": "Dipende anche dalla massa del motore",
      "B": "Esprime la capacità di immagazzinare calore",
      "C": "È uguale per tutti i motori",
      "D": "Dipende solo dalla massa del motore",
      "E": "Aumenta al diminuire della massa"
    },
    "corretta": "A, B",
    "spiegazione": "La capacità termica ($C = m \cdot c$) rappresenta l'inerzia termica del motore: più massa c'è (A), più calore il motore può accumulare prima di aumentare di un grado la sua temperatura (B)."
  },
  {
    "id": 21,
    "domanda": "Tra i vantaggi della flessibilità di un sistema produttivo NON troviamo:",
    "risposte": {
      "A": "Possibilità di produzione a costi ridotti per bassi volumi",
      "B": "Possibilità di operare su vasti assortimenti",
      "C": "Possibilità di aumentare la cadenza produttiva",
      "D": "Possibilità di variare il contenuto di lavoro del prodotto",
      "E": "Possibilità di rapidi interventi di ristrutturazione"
    },
    "corretta": "C",
    "spiegazione": "La flessibilità solitamente va a discapito della cadenza (velocità massima di produzione), che è invece il punto di forza dei sistemi rigidi dedicati."
  },
  {
    "id": 22,
    "domanda": "La curva caratteristica di un motore cc a magneti permanenti è:",
    "risposte": {
      "A": "Una retta con pendenza positiva",
      "B": "Una parabola",
      "C": "Un'iperbole equilatera",
      "D": "Un segmento verticale",
      "E": "Una retta con pendenza negativa"
    },
    "corretta": "E",
    "spiegazione": "La relazione tra coppia e velocità è lineare: all'aumentare del carico (coppia), la velocità diminuisce proporzionalmente, disegnando una retta decrescente."
  },
  {
    "id": 23,
    "domanda": "Per un cilindro doppio effetto si può affermare che:",
    "risposte": {
      "A": "Lo stelo trasmette la forza e il movimento al carico",
      "B": "È sempre presente lo stelo",
      "C": "È sempre presente l'ammortizzo pneumatico",
      "D": "L'alesaggio è il diametro del pistone",
      "E": "A pari portata la velocità di uscita è sempre uguale a quella di rientro"
    },
    "corretta": "A",
    "spiegazione": "Lo stelo è l'elemento meccanico che fuoriesce dal cilindro per collegarsi fisicamente all'oggetto da muovere, trasmettendo la potenza pneumatica come forza meccanica."
  },
  {
    "id": 24,
    "domanda": "Si deve muovere mediante un cilindro doppio effetto una massa complessiva di 80 kg alla velocità di $3.6~km/h$. L'alesaggio minimo del cilindro affinché l'ammortizzo pneumatico sia efficace è:",
    "risposte": {
      "A": "125 mm",
      "B": "32 mm",
      "C": "80 mm",
      "D": "65 mm",
      "E": "40 mm"
    },
    "corretta": "C",
    "spiegazione": "Dalle tabelle tecniche di ammortizzo, incrociando la massa (80 kg) e la velocità (1 m/s, ovvero 3.6 km/h), si ricava che un alesaggio da 80 mm è il minimo necessario per frenare il carico senza urti violenti a fine corsa."
  },
  {
    "id": 25,
    "domanda": "Quali delle seguenti affermazioni su un GRAFCET NON è corretta:",
    "risposte": {
      "A": "Consente di documentare in modo universalmente comprensibile le regole di funzionamento e le soluzioni progettuali adottate",
      "B": "Si basa sulla rappresentazione della legge di moto di un ciclo automatico",
      "C": "È un grafico di controllo per passi e transizioni",
      "D": "Aiuta a capire quali sono le variabili logiche di cui c'è effettiva necessità",
      "E": "Consente un'efficace verifica della correttezza di svolgimento del ciclo"
    },
    "corretta": "B",
    "spiegazione": "Il GRAFCET descrive la logica sequenziale (stati e transizioni), non la 'legge di moto' fisica (posizione/tempo) che è invece rappresentata dai diagrammi spazio-fase o spazio-tempo."
  },
  {
    "id": 26,
    "domanda": "La forza effettivamente sviluppata nel movimento di uscita dal cilindro doppio effetto rappresentato:",
    "risposte": {
      "A": "È il prodotto tra la pressione nella camera posteriore e l'area del pistone",
      "B": "Dipende solo dalla pressione nella camera anteriore",
      "C": "Dipende dalla pressione nella camera posteriore, da quella nella camera anteriore e anche dagli attriti nelle guarnizioni",
      "D": "Varia con il quadrato delle pressioni nelle camere",
      "E": "Si ricava dal catalogo che fornisce la forza massima"
    },
    "corretta": "C",
    "spiegazione": "La forza utile è data dalla spinta della pressione posteriore meno la contropressione anteriore (se presente) e meno le forze d'attrito generate dalle guarnizioni del pistone e dello stelo."
  },
  {
    "id": 27,
    "domanda": "La condizione di ricettività in un GRAFCET (seleziona più risposte):",
    "risposte": {
      "A": "Può essere il risultato di operazioni logiche tra diversi segnali",
      "B": "Abilita il passaggio da una tappa all'altra",
      "C": "Rappresenta un'azione compiuta dal sistema",
      "D": "È sempre legata a un sensore fisico"
    },
    "corretta": "A, B",
    "spiegazione": "La ricettività è la condizione logica associata a una transizione (A). Se la tappa precedente è attiva e la ricettività è vera, il controllo passa alla tappa successiva (B)."
  },
  {
    "id": 28,
    "domanda": "Un cilindro differenziale (seleziona più risposte):",
    "risposte": {
      "A": "È un cilindro doppio effetto con stelo",
      "B": "Ha velocità di uscita e di rientro diverse",
      "C": "Ha la stessa area utile su entrambi i lati del pistone",
      "D": "È un cilindro a semplice effetto"
    },
    "corretta": "A, B",
    "spiegazione": "Avendo lo stelo solo da un lato, le aree su cui preme l'aria sono diverse. A pari portata d'aria, il cilindro uscirà più lentamente (area maggiore) e rientrerà più velocemente (area minore)."
  },
  {
    "id": 29,
    "domanda": "Per i cilindri a semplice effetto si può affermare che (seleziona più risposte):",
    "risposte": {
      "A": "È sempre presente una molla",
      "B": "A catalogo si possono avere corse anche molto più grandi dell'alesaggio",
      "C": "L'affidabilità è sempre maggiore rispetto ad un cilindro doppio effetto",
      "D": "A catalogo si possono avere corse poco più grandi dell'alesaggio",
      "E": "Il ritorno può essere determinato dalla forza peso esercitata dalla massa da muovere"
    },
    "corretta": "D, E",
    "spiegazione": "La corsa è limitata perché la molla interna occupa spazio (D). Il ritorno non richiede aria: può avvenire per molla o per gravità se il carico è disposto verticalmente (E)."
  },
  {
    "id": 30,
    "domanda": "L'ammortizzo esterno con shock adsorbers viene fatto quando:",
    "risposte": {
      "A": "L'energia potenziale da ammortizzare è elevata",
      "B": "L'energia cinetica da ammortizzare è bassa",
      "C": "L'energia potenziale da ammortizzare è bassa",
      "D": "Solo se il cilindro non ha ammortizzo pneumatico",
      "E": "L'energia cinetica da ammortizzare è elevata"
    },
    "corretta": "E",
    "spiegazione": "Se il carico è molto veloce o pesante, l'aria compressa nel cilindro (ammortizzo pneumatico) non basta a fermarlo. Si usano allora deceleratori idraulici esterni per assorbire l'energia cinetica in eccesso."
  },
  {
    "id": 31,
    "domanda": "Quale/i delle seguenti affermazioni sugli azionamenti pneumatici NON è/sono corretta/e:",
    "risposte": {
      "A": "Sono sistemi più economici delle altre tipologie di azionamento",
      "B": "Consentono di sviluppare forze molto elevate",
      "C": "Sono poco precisi a causa della comprimibilità dell'aria",
      "D": "Non hanno bisogno di tubazioni di ritorno",
      "E": "Necessitano di sistemi di essiccamento dell'aria"
    },
    "corretta": "B",
    "spiegazione": "La pneumatica lavora a pressioni relativamente basse (~6-8 bar). Per sviluppare forze molto elevate (come sollevare tonnellate) è necessario passare all'oleodinamica, che lavora a centinaia di bar."
  }
];
