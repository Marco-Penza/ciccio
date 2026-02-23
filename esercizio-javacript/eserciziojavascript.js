/*var B = Number(prompt("inserisci base"));
var H = Number(prompt("inserisci altezza"));
let Area = D;
console.log(area);
var base = Number (prompt("inserisci Base"));
var altezza = Number(prompt("inserisci altezza"));

var Domanda = prompt("cosa vuoi calcolare?");
var area;

function areaTriangolo(base, altezza) {
    return (base * altezza) / 2;
}
function areaCerchio(raggio) {
    return PI * raggio * raggio;
}
function areaRettangolo(base, altezza) {
    return base * altezza;
}

if (Domanda === "triangolo") {
    var base = Number (prompt("inserisci Base"));
    var altezza = Number (prompt("inserisci altezza"));
     areaTriangolo
}
else if (Domanda === "cerchio"){
    var raggio = Number(prompt ("inserisci raggio"))
    const Pgreco = 3.14;
    areaCerchio
}
else 
    {
        var base = Number(prompt ("inserisci base"));
        var altezza = Number(prompt ("inserisci altezza"));
       areaRettangolo
}
console.log(area);


let C = calcolaareatriangolo (1,10)



}

var n1 = Number(prompt ("Primo numero"));
var n2 = Number(prompt ("Secondo numero"));
var n3 = Number(prompt ("Terzo numero"));
    let risultato = media(n1, n2 ,n3);
console.log(risultato);
var a1 = Number (prompt ("primo numero"));
var a2 = Number (prompt("Secondo numero"));
var a3 = Number (prompt("Terzo numero"));
let risultato1 = media(a1, a2, a3);
console.log(risultato1);
var sommaMedie = risultato + risultato1;
console.log(sommaMedie);


function media (primo, secondo, terzo) {
        let media = (primo + secondo + terzo) / 3;
        return media; 
} 
    
var risultato = 0;
var domanda;

do {
    var n1 = Number(prompt ("Primo numero"));
    var n2 = Number(prompt ("Secondo numero"));
    var n3 = Number(prompt ("Terzo numero"));
    var r = media (n1, n2 , n3);
    console.log("risultato è:", + r);
    
    risultato = risultato + r;
    domanda = prompt("vuoi uscire si o no?");
} while (domanda != "si");
 

//Sommiamo n numeri dati in input finche la sooma non arriva a 100.

let somma = 0;
let numero;

do {
    numero = Number(prompt("Inserisci il numero"));
    somma = somma + numero;
    console.log("Il numero che hai inserito e':", numero, "somma attuale e':", somma); 
}   while (somma < 100);
console.log("somma finale è:", somma); 


// tabellina del 7

let risultato;
let n;
for(let i = 0; i <= 10; i++) {
    //n  = Number (prompt("inseriscix un numero per la moltiplicazione"));
    n = 7;
    risultato = n * i;
    console.log(n + " * " +  i + " = " + risultato);

    //console.log(i);


   let risultato;
   let n;

      
    n = Number (prompt("inserisci il primo numero finche non arriva a 100"));
    for(let i = 0; i <= 100; i++){
       risultato = n + i;
       console.log(n + " + " + i + " = " + risultato);
    }
       
  let risultato ="";
    let n;
    n = Number (prompt("primo numero"))
    for(let i = 0; i <= n; i++) {
       risultato = risultato + "*";
        console.log(risultato);
    }


let righe = 10;
let spazio = righe - 1;

for(i = 0; i < righe; i++) {
    let linea = "";
    for(x = 0; x <= spazio; x++) {
        linea += " "; 
    }
    for(y = 0; y < (2 * i + 1); y++) {
        linea += "*";
    } 
    console.log(linea);
    spazio --;
}


        let milan = "milan";
        let inter = "inter";
        let risultato;
        for (let i = 0 ; i <= 5; i++) {
            for(let x = 0; x <= 5; x++ ) {
            console.log("il risultato e'" + milan + i + " - " + inter + x);
        }
        }
        

        var x = [3, 18, 20, 4, 1];
        let somma = 0;
        for(let j = 0; j < x.length; j++) {
            somma += x[j];
        }
        console.log("la somma e':" + somma);

    x = ["ciao", "javascript", "venerdi"];
    let somma = 0;
    for(let i = 0; i < x.length; i++) {
        console.log(x[i].length);
    }


// esercizio con somma numeri e lettere

// parole[i] - totaleLettere
let parole = ["casa","albero","gatto","computer"];
let totalelettere = 0;
for (let i = 0; i < parole.length; i++) {
    totalelettere += parole[i].length;
}
console.log(totalelettere);


// esercizio in un ciclo for conta quante vocali ci sono e sommale e alla fine stampa

let parole = ["sole","cielo","luna","stella","mare"];
let totaleVocali = 0;
for(let i = 0; i < parole.length; i++) {
    for(let j = 0; j < parole[j].length; i++)
        console.log(parole[i][j]);
}

// esercizio contando le vocali di ogni parola.
let parole = ["serie", "cielo", "luna", "stella", "mare"];
let totaleVocali = 0;

for (let i = 0; i < parole.length; i++) {
    for (let j = 0; j < parole[i].length; j++){
        if (
            parole [i][j] === "a" ||
            parole [i][j] === "e" ||
            parole [i][j] === "i" ||
            parole [i][j] === "o" ||
            parole [i][j] === "u"
        ) {
        totaleVocali++;
    }
}
}


//esercizio contare i numeri senza i doppioni

x = [1,1,3,7,1,3,]
let unici = [];

for (let i = 0; i < x.length; i++) {
    let numeroCorrente = x[i]; 
    if (!unici.includes(numeroCorrente)) {
        unici.push(numeroCorrente);
    }
}
console.log("conteggio totale" , unici);

// esercizio aggiungi la proprietà anno - modifica il valore di modello - stampa in console

let auto = {
    marca: "Fiat",
    modello: "Panda"
};

auto.anno = 2024
auto.modello = "Panda"

console.log(auto);



// esercizio crea un oggetto persona con:nome - cognome - un metodo saluta() che stampa "ciao,mi chiamo nome cognome"

let person = {
    nome: "Marco",
    cognome: "Penza",
    saluta: function (){
        return "ciao mi chiamo" + " " + this.nome + " " + this.cognome
    }
};
console.log(person.saluta());


// crea un array studenti contenente almeno 3 oggetti studente (nome , voto) scrivi una funzione che : stampi solo gli studenti con voto > 6.

studenti = [{nome: "Marco", voto: 8}, {nome: "Alessandro", voto: 10}, {nome: "Ivan" , voto:2}];
    studenti.forEach(function(studenti){
        if (studenti.voto > 6) {
            console.log(studenti.voto + " " + studenti.nome)
        };
    })

//stampare in console solo i prodotti che costano piu di 20 euro

prodotti = [{nome: "cocacola", prezzo: 3}, {nome: "vino", prezzo: 20}, {nome: "samsung", prezzo:899}];
    prodotti.forEach (function(prodotti) {
        if (prodotti.prezzo <= 20) {
            console.log(prodotti.prezzo + " " + prodotti.nome)};
    })



//stampare solo i film piu lunghi di 120 min e mostrarli tutti su un unica riga separati da ",".

film = [{titolo: "avengers", durata:200}, {titolo: "batman", durata: 100}, {titolo: "titanic", durata: 240}];
    film.forEach(function(filmsingolo) {
        if (filmsingolo.durata > 120) {
            console.log(filmsingolo.titolo + " " + filmsingolo.durata)
        }
    })
        

// crea un array chiamato biblioteca che contiene 5 oggetti, ogni oggett "libro" deve avere queste proprieta': titolo, anno autore e letto. scrivi un ciclo che stampi i dettagli di tutti i libri.
// stampi solo i titoli dei libri che hai gia' letto.

biblioteca = [{titolo: "l'inferno", anno: "2025", autore: "giuseppe", letto: si}, {titolo: "paradiso", anno:""}]












// esercizio:  Crea un array prodotti contenente almeno 3 oggetti, ognuno con: nome - prezzo e scrivi una funzione che stampi il nome di tutti i prodotti.

prodotti = [{
    nome: "samsung", prezzo: 199
},
{
    nome: "mouse", prezzo: 29
},
{
    nome: "anello", prezzo: 20
}];
var somma = 0
prodotti.forEach(prodotto =>
    somma = prodotto.prezzo + somma
)
console.log(somma + " " + `$`);



const studente = [{
    name:"carne",
    voto:6
},
]

function Studente(nome, cognome, voto){
    this.name = nome;
    this.cognome = cognome;
    this.voto = voto;
}
p = [
    new Studente("ivan", "zazzaroni", 10),
    new Studente("luca", "rossi", 8)];
    p.filter(studente => studente.voto > 5)
    .forEach(studente => console.log(studente.name + " " + studente.lastName + " ha superato l esame"));

// esercizio restituisca solo i prodotti con prezzo maggiore di 10euro


var prodotti = [
  {
    name: "latte",
    prezzo: 12
  },
  {
    name: "caramella",
    prezzo: 2
  },
  {
    name: "pane",
    prezzo: 20
  }
];

prodotti
  .filter(function (prodotto){
    return prodotto.prezzo > 10; })
  .forEach(function (prodotto) { console.log(prodotto.prezzo);
  });


//Creare un costruttore dipendenti, creare gli oggetti e inserirli in un array. Poi devi stampare a video lo stipendio totale solo dei dipendenti di tipo dirigente.

function Dipendente(nome, cognome, posizione_lavorativa, stipendio){
    this.name = nome;
    this.cognome = cognome;
    this.posizione_lavorativa = posizione_lavorativa;
    this.stipendio = stipendio;
}

x = [
    new Dipendente("Ivan", "Rossi", "dirigente", 2000),
    new Dipendente("Maria", "Rossi", "impiegata", 1500),
    new Dipendente("Giuseppe", "Rossi", "dirigente", 3000),
    new Dipendente("Marco", "Rossi", "portinaio", 500),
    new Dipendente("Alessandro", "Rossi", "ingegnere informatico", 1900)
    
]
var dipendenti_dirigenti = x.filter(function(dipendente){
    return dipendente.posizione_lavorativa == "dirigente";
});

var sommaStipendiDirigenti = 0;
dipendenti_dirigenti.forEach(function(dipendente){
    sommaStipendiDirigenti += dipendente.stipendio;
});
console.log("Stipendio totale dei dirigenti" + " "   + sommaStipendiDirigenti);

//

  x =  dato.filter(function(){
        return dato.name == "Glenna Reichert";
    }) 
    console.log(x);
*/
/*
async function caricaDato() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/')
    const dato = await response.json();
    console.log(dato)
    
}
caricaDato();


// prendere solo gli user id
async function caricaDato() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const array = await response.json();
    console.log(array);

    array.forEach(function(elementoArray){
        if (elementoArray.userId == 2) {
            console.log(elementoArray)
        }
    });
}
caricaDato();



//prendere i numeri pari

async function caricaDato() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const array = await response.json();
    console.log(array);
    array.forEach(function(elementoArray){
        if (elementoArray.userId % 2 == 0){
            console.log(elementoArray)
        }
    });
}
caricaDato();


//creare un oggetto con proprieta' e intestatario e saldo e i metodi preleva deposita e mostra saldo.




//stesso esercizio di prima ma scritto in maniera diversa
function ContoBancario(intestatario, saldo) {
    this.intestatario = intestatario;
    this.saldo = saldo;
    this.deposita = function(valore) {
        this.saldo += valore;
    }
    this.preleva = function(valore) {
        if (valore > this.saldo) {
            console.log(this.intestatario + ": Saldo insufficiente");
        } else {
            this.saldo -= valore;
        }
    }
    this.mostraSaldo = function() {
        console.log(this.intestatario + " : " + this.saldo);
    }
}

function Banca(conti) {
    this.conti = conti;

    this.stampaConti = function() {
        this.conti.forEach(function(conto) {
            conto.mostraSaldo();
});

    }
    this.preleva = function(nome, valore) {
        var contoTrovato = this.conti.find(function(conto) {
            return conto.intestatario === nome;
});
        if (contoTrovato) {
            contoTrovato.preleva(valore);
        } else {
            console.log("Saldo insufficiente: " + nome);
        }
    }

    // Metodo per depositare tramite nome
    this.deposita = function(nome, valore) {
        var contoTrovato = this.conti.find(function(conto) {
            return conto.intestatario === nome;
        });
        if (contoTrovato) {
            contoTrovato.deposita(valore);
        } else {
            console.log("Conto non trovato: " + nome);
        }
    }
}

x = [
    new ContoBancario("Michele Rossi", 10000),
    new ContoBancario("Andrea Rossi", 5000),
    new ContoBancario("Maria Rossi", 4000),
    new ContoBancario("Ciccio Rossi", 1500), 
]
var banca = new Banca(x);
banca.stampaConti();
x[0].preleva(5000);








const contoCorrente = {
    intestatario: "Michele Rossi",
    saldo: 10000,
    mostraSaldo: function() {
        console.log(this.intestatario + " : " + this.saldo);
    },
    deposita: function(valore) {
        this.saldo += valore;
        this.mostraSaldo();
    },
    preleva: function(valore) {
        if (valore > this.saldo) {
            console.log(this.intestatario + ": Saldo insufficiente per prelievo di " + valore);
        } else {
            this.saldo -= valore;
            this.mostraSaldo();
        }
    }
};

contoCorrente.deposita(3000); 

// esercizio : aggiungere
 let ppp = document.getElementById("Ele");
 let variabile = ppp.getAttribute("value");

 variabile = variabile + " bello";

ppp.setAttribute("value",variabile);
//esercizio: quando clicchi il bottone far uscire il testo.
function ciao() {
var input = document.getElementById("1");
var valore = input.value;
input.value = valore + "bella";
}
function cambioTitolo(){
    console.log(document.getElementById("titolo").innerHTML = "CIAO CIAO CIAO")
    document.getElementById("titolo").innerHTML = "CIAO CIAO CIAO"
}
let count =0;
   function contatore() {
    count++
    let input = document.getElementById("2")
    input.setAttribute("value",  +count);
    console.log
}
let A = 0;
function ciccio() {
    A++
    let input = document.getElementById("titolo").innerHTML = A;
}
dati.forEach(function() {
    if (todos.title.Includes(a.value)) {
        const li = document.createElement("li");
        li.innerHTML = todos.title
        document.body.appendChild(li);
    }
 })
var dati = [];

async function mostra() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    dati = await response.json();
    stampa(dati);
}

function stampa(array) {
    const ul = document.getElementById("lista");
    ul.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        const li = document.createElement("li");

        // checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // testo
        const span = document.createElement("span");
        span.textContent =
            " ID: " + array[i].id +
            " Title: " + array[i].title +
            " Completed: " + array[i].completed + " ";

        // bottone
        const button = document.createElement("button");
        button.textContent = "Info";

        button.onclick = function () {
            alert("ID: " + array[i].id);
        };

        // riga testo quando spunti
        checkbox.onchange = function () {
            if (checkbox.checked) {
                span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "none";
            }
        };

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(button);

        ul.appendChild(li);
    }
}

function cerca() {
    var testo = document.getElementById("testo").value;

    var filtrati = dati.filter(function(todo) {
        return todo.title.includes(testo);
    });

    stampa(filtrati);
}

// carica tutto all'avvio
mostra();
// con spunta 
function stampa(array) {
    const ul = document.getElementById("lista");
    ul.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        const li = document.createElement("li");

        // checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // testo
        const testo = document.createTextNode(
            " ID: " + array[i].id +
            " Title: " + array[i].title +
            " Completed: " + array[i].completed
        );

        li.appendChild(checkbox);
        li.appendChild(testo);

        ul.appendChild(li);
    }
}


*/


var dati = [];

async function mostra() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    dati = await response.json();
    stampa(dati); 
}

function stampa(array) {
    const ul = document.getElementById("lista");
    ul.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        const li = document.createElement("li");
        li.textContent ="ID: " + array[i].id + " Title: " + array[i].title + " Completed: " + array[i].completed + " ";
        const la = document.createElement("button");
        la.innerHTML = "completato: " + array[i].completed;
        li.appendChild(la);
        ul.appendChild(li);
    }
}

function cerca() {
    var testo = document.getElementById("testo").value;

    var filtrati = dati.filter(function(todo) {
        return todo.title.includes(testo);
    });
    stampa(filtrati);
}

// carica tutto all'avvio
mostra();
