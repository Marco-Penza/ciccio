/*
let = 10;



document.querySelector('#contenuto').innerHTML = "ciccio";

// destructuring array

const lista = [1, 2, 3, 4, 5];
console.log(lista);

const [first, second] = lista;

console.log(first, second);

//destructuring obj

const obj = {
    nome: "Marco",
    cognome: "Penza",
    eta: 32
};

const { nome: n, cognome: c } = obj;

console.log(n, c)

const { nome: na, cognome: ca, telefono: tel = "3222222" } = obj;
console.log(na, ca, tel)

// dato un array  usa il destructuring per estrarre i nomi di tutti gli utenti in variabili separate chiamate user1, user2 e user3;
const user = [{
    name: 'john',
    age: 30
},
{
    name: 'Alice',
    age: 25
},
{
    name: 'Bob',
    age: 35
}];
const [u1, u2, u3] = user;
const { name: user1 } = u1;
const { name: user2 } = u2;
const { name: user3 } = u3;
console.log(user1, user2, user3)

const oggetto = {
    "id":1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "sincer@april.biz",
    "phone": "1-770-736-8031 x56642",
    "website": "hildegard.org"
};

const {name: nomeb, username: userb = "default"} = oggetto;
console.log(nomeb, user);
 a = [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }]




const array = [ 1, 2, 3, 4, 5]

const another = [5, 6, 7]

const ciccio = [...array, 7,...another];

const obje = {name: "silvio",orientamento:"etero", eta: 20};

const preferenze = {
    colore: "red",
    orientamento: "gay"
};

const prea = {
    ...obje,
    ...preferenze
}
console.log(prea);


//Esercizio: hai i seguenti dati:

const numeriBase = [1, 2, 3];
const numeriExtra = [4, 5];

const utente = {
    id: 10,
    nome: "Mario",
    ruolo: "user"
};

//crea un nuovo array tuttiNumeri che contenga tutti gli elementi di numeriBase e numeriExtra senza usare concat.
//Crea un nuovo array numeriAggiornati aggiungendo il numero 6 alla fine, senza modificare tuttiiNumeri.
//Crea un nuovo oggetto utente Admin partendo da utente ma con: ruolo impostato a "admin", nuova proprieta attivo: true
//Non modificare l oggetto utente originale

const tuttiiNumeri = [
    ...numeriBase,
    ...numeriExtra,
];
const numeriAggiornati = [
    ...tuttiiNumeri,
    6
];
   let utenteAdmin = {
        ...utente,
        attivo: true,
        ruolo: "admin"
    };
    console.log(tuttiiNumeri , "vedere tutti i numeri");
    console.log(numeriAggiornati , "tutti i numeri aggiornati");
    console.log(utente, "tutto il contenuto dell oggetto utente");
    console.log(utenteAdmin, "tutto il contenuto dell oggetto utente admin, cambiando il ruolo da utente ad admin");

    class Pippo {
        nome = "ciccio";
        hello(x) {
            console.log(x +"sono" + this.nome);}
        constructor(V) {
           this.nome = "ciccio"
        }
        }
    const p = new Pippo("silvio")
console.log(p.hello());

    // istanziamo una classe persona e mettiamo il mio nome, cognome eta, vengono passate dal costruttore e facciamo una funzione stampa ciao sono maria ed ho 35 anni;

    class Persona {
        nome;
        eta; 
        // ... altre proprieta'

        constructor(x, y, ) {
            this.nome = x;
            this.eta = y;
          
        }
        auguri() {
                this.eta++;
        }
        sommaEta(p) {
            this.eta = this.eta + p.eta;
        }
        presentati() {
            console.log(" paiciere io sono " + this.nome + " ed ho " + this.eta + " " + "anni");
        };
        saluta(p) {
            console.log(" ciao io sono " + this.nome + " come stai " + p.nome + " ?");
        }
        //per l esercizio di sotto(1 persona che ne saluta altre 2)
        salutaDuePersone(p1,p2) {
            console.log(" Ciao " + p1.nome + " e " + p2.nome + " sono " + this.nome)
        }
        //... altri metodi

    };


    const maria = new Persona("Maria", 35);
    maria.presentati();

    const peppino = new Persona("peppino", 55);

    peppino.presentati();
   
    maria.saluta(peppino);
    //creare un altra persona filippo, modificare la classe persona per aggiungere un altra azione per fare un altra azione,
    // entrambe le persone e' saluta, maria deve salutare filippo e dire come stai?

    const filippo = new Persona("filippo", 60);

    maria.auguri();
    filippo.presentati(filippo);
    maria.salutaDuePersone(peppino,filippo)

//corso yoga,crea una classe con luogo data lezione e numero partecipanti e lista partecipanti.
//metodi per le persone si iscrivono si disiscrivono,vedono se c'è posto.

    

//stesso esercizio, ora abbiamo una classe biblioteca e libro
//biblioteca ha un numero massimo di libri, puo aggiungere un libro e rimuovere.
//non si puo avere doppioni
//metodo mostra per sapere quanti libri sono ancora disponibili.


    class Biblioteca {
        numeroMassimoLibri = 10;
        numeroScaffale;
        listaLibri = [];
        constructor(numeroMassimoLibri,numeroScaffale) {
            this.numeroMassimoLibri = numeroMassimoLibri;
            this.numeroScaffale = numeroScaffale;}
        aggiungiLibro(libro) {
            if(this.listaLibri.length < this.numeroMassimoLibri){
            console.log("Il seguente libro : " + libro.nome + " " + libro.autore + " " + libro.dataRilascio + " e' stato aggiunto con successo")
            this.listaLibri.push(libro);
            }else {
                console.log("Mi dispiace ma attualmente lo spazio è insufficiente");
            }
            }
        rimuovereLibro(libro) {
            this.listaLibri = this.listaLibri.filter(pippo => pippo.nome != libro.nome || pippo.autore != libro.autore);
            console.log("Il libro" + libro.nome + " e' stato rimosso, ecco la lista aggiornata" + this.listaLibri);
            for(let i = 0; i < this.listaLibri.length; i++){
                console.log(" Nome " + this.listaLibri[i].nome + " , Autore: " + this.listaLibri[i].autore + " , Data: " + this.listaLibri[i].dataRilascio)    
        }   
            if (this.listaLibri.length === 0) {
                console.log("La biblioteca e' vuota");
            }
        }
    }

    class Libro {
        constructor(nome,autore,dataRilascio) {
            this.nome = nome;
            this.autore = autore;
            this.dataRilascio = dataRilascio;
        }
    }

    const nuovaLibro = new Biblioteca(10,20);
    const nicolaGratteri = new Libro("Il male", "Nicola Gratter", "10/05/2010");
    const aaa = new Libro("arcobaleno","ciccio", "20/10/2020");
    
    nuovaLibro.aggiungiLibro(nicolaGratteri);
    nuovaLibro.aggiungiLibro(aaa);
    nuovaLibro.rimuovereLibro(aaa);

    //Creare una Videoteca che gestisce una lista di Film.

        class Videoteca {
            numeroMassimoFilm = 5;
            listaFilm = [];
            constructor(numeroMassimoFilm,nomeVideoteca) {
                this.numeroMassimoFilm = numeroMassimoFilm;
                this.nomeVideoteca = nomeVideoteca;
            }
            aggiungiFilm(film) {
                if(this.listaFilm.length < this.numeroMassimoFilm){
                    console.log("Il film di nome : " + film.titolo + " regista nome: " + film.regista + " data produzione : " + film.anno);
                this.listaFilm.push(film);
                } else {
                    console.log(" Spazio insufficiente nella videoteca, riprovi la prossima volta ");
                }
            }
            rimuoviFilm(film) {
                if (this.listaFilm.length === 0) {
                    console.log("Videoteca vuota");
                    return;
                }

                let lunghezzaPrima = this.listaFilm.length;

                this.listaFilm = this.listaFilm.filter(pippo1 => pippo1.titolo !== film.titolo || pippo1.regista !== film.regista);
                if (this.listaFilm.length < lunghezzaPrima) {
                    console.log("Il film : " + film.titolo + " e' stato trovato e rimosso");
                } else {
                    console.log("Film non trovato");
                }
            }
            mostraFilm() {
                for(let x = 0; x < this.listaFilm.length ; x++) {
                    console.log(" Nome film : " + this.listaFilm[x].titolo + " girato da : " + this.listaFilm[x].regista + " anno : " + this.listaFilm[x].anno);
                }
                if (this.listaFilm.length === 0) {
                    console.log(" Videoteca vuota ");
                }
            }
        }

        class Film {
            constructor(titolo, regista, anno) {
                this.titolo = titolo;
                this.regista = regista;
                this.anno = anno;
            }
        }

        class Yoga {
        luogo = "qui";
        dataLezione = "oggi";
        listaPartecipanti = [];
        numero_partecipanti = 4;
        
        constructor(luogo, dataLezione, numero_partecipanti) {
            this.luogo = luogo;
            this.dataLezione = dataLezione;
            this.numero_partecipanti = numero_partecipanti;
        }
        aumenta() {
            this.numero_partecipanti++;
        }  
        diminuisci() {
            this.numero_partecipanti--;
        }
        listaPartecipanti1(iscritto){
            console.log(this.numero_partecipanti)
        }
        informazioni
        iscrivere(iscritto) {
            if(this.listaPartecipanti.length < this.numero_partecipanti){
                console.log("Benvenuto al corso " + iscritto.nome + " " + iscritto.cognome);
                this.listaPartecipanti.push(iscritto);
            }else{
                console.log("siamo al completo, riprovi domani" + iscritto.nome + " " + iscritto.cognome);
            }
        }

        disiscrivere(iscritto) {
            this.listaPartecipanti = this.listaPartecipanti.filter(partecip => partecip.nome != iscritto.nome);
            console.log(this.listaPartecipanti);
           // console.log("Ci dispiace per l'accaduto " + iscritto.nome + " " + iscritto.cognome);
        }
    }

    class Partecipante {
        nome;
        cognome;
        eta;
        constructor(nome, cognome, eta) {
            this.nome = nome;
            this.cognome = cognome;
            this.eta = eta;
        }
    }

    const corso = new Yoga("qui", "oggi", 7);
    const maria = new Partecipante("maria", "cin" );    
    const peppino = new Partecipante("Peppino", " u puorc")
    const berlusconi = new Partecipante("silvio", "berlusconi");
    const gianni = new Partecipante("gianni" , "mucciaccio");
    const ciccio = new Partecipante("ciccio" , "pino");


    corso.iscrivere(berlusconi);
    corso.iscrivere(ciccio);
    corso.iscrivere(peppino);
    corso.disiscrivere(ciccio);
    corso.iscrivere(ciccio);



//creiamo una classe insegnante che è anch essa una persona che saluta buonasera ragazzi

class Persona {
    constructor(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
    saluta(p) {
        console.log(this.nome + " ciao  " + this.eta + " " + p.nome + p.eta)
    }
}

class Insegnante extends Persona {
    constructor(nome, cognome, eta, lavoro) {
        super(nome, cognome, eta);
        this.lavoro = lavoro;
    }
    saluta(p) {
        console.log(" salve " + p.nome + " , io sono " + this.nome + " " + this.cognome);
    }

    cheLavoroFai() {
        return "faccio " + this.lavoro;
    }
}
const persona1 = new Persona("Marco", "Penza", 32)
const ins = new Insegnante("Maria", "X", 20, "insegnante")
persona1.saluta(ins);
ins.saluta(persona1);


//console.log(ins.cheLavoroFai());

//classe dipendente base dipendente proprieta : nome stipendio base metodi: calcolaStipendio() restituisce lo stipendio base
//getDescrizione() restituisce una descrizione del dipendente;
//Classe manager che estende dipendente proprieta aggiuntiva bonus, ovrreide calcolastipendio() usando super
//sviluppatore che estende dipendente proprieta aggiuntiva : livello ("jiunior" | "mid" | "senior")
//override di calcolaStipendio()
//jiunior 10% - mid 20% - senior + 30%
//crea un array di dipendenti misti
//calcola e stampa descrizione e stipendio finale
*/

class Dipendente {
    constructor(nome,cognome,eta,stipendioBase) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.stipendioBase = stipendioBase;
    }
    calcolaStipendio() {
        return console.log(this.stipendioBase);
    }
    getDescrizione() {
        console.log(this.nome + " " + this.cognome + " " + this.eta + " "  + this.stipendioBase)
    }
}

export class Manager extends Dipendente {
    constructor(nome, cognome, eta, stipendioBase, bonus) {
        super(nome,cognome,eta,stipendioBase);
        this.bonus = bonus;
    }
    calcolaStipendio() {
        return console.log("Lo stipendio attuale di " + this.nome + " " + this.cognome + " è " +  (this.stipendioBase + this.bonus));
    }
}

export class Sviluppatore extends Dipendente {
    constructor(nome, cognome, eta, stipendioBase, livello) {
        super(nome, cognome, eta, stipendioBase);
        this.livello = livello;
    }

    calcolaStipendio() {
        if (this.livello === "junior") {
            console.log("lo stipendio di " + this.nome + " " + this.cognome + " + per il junior developer è : " + this.stipendioBase * 1.20);
        } else if (this.livello === "mid") {
            console.log("lo stipendio di " + this.nome + " " + this.cognome + " + per il mid developer è : " + this.stipendioBase * 1.20);
        } else { 
            console.log("lo stipendio di " + this.nome + "  " + this.cognome  + " per il senior developer è : " + this.stipendioBase * 1.20);
        }
    }
}


const manager1 = new Manager("marco", "penza", 20, 1500, 20);
let sviluppatore1 = new Sviluppatore("marco","penza", 20, 1500, "senior");
manager1.calcolaStipendio();
sviluppatore1.calcolaStipendio();



