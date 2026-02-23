"use strict";
let nome = "Marco";
const contenuto = document.getElementById("contenuto");
if (contenuto) {
    contenuto.innerHTML = `Ciao ${nome}!`;
}
let nome1 = "Marco";
const contenuto1 = document.getElementById("contenuto2");
if (contenuto1) {
    contenuto1.innerHTML = `Ciao ${nome1}!`;
}
class StudenteService {
    constructor() {
        this.listaStudenti = [];
    }
    addStudente(studente) {
        this.listaStudenti.push(studente);
    }
    removeStudente(s) {
        this.listaStudenti = this.listaStudenti.filter(p => p.id != s.id);
    }
    listActive() {
        return this.listaStudenti.filter(a => a.active === true);
    }
    calcolaMedia(s) {
        if (s.voti.length === 0) {
            return 0;
        }
        const somma = s.voti.reduce((acc, voto) => {
            return acc + voto;
        }, 0);
        const media = somma / s.voti.length;
        return media;
    }
    isPromosso(s) {
        return this.calcolaMedia(s) >= 6;
    }
    stampaRisultato(s) {
        return "il voto di " + s.name + " è " + this.calcolaMedia(s) + " e risulta " + (this.isPromosso(s) ? "Pomosso" : "Bocciato");
    }
}
const mario = {
    id: "1",
    name: "Mario",
    voti: [7, 8, 6, 8, 1, 3],
    active: true
};
const anna = {
    id: "2",
    name: "Anna",
    voti: [9, 7, 8],
    active: true
};
const luca = {
    id: "3",
    name: "Luca",
    voti: [5, 6],
    active: false
};
const marco = {
    id: "4",
    name: "Marco",
    voti: [],
    active: true
};
const servizioStudenti = new StudenteService();
servizioStudenti.addStudente(mario);
servizioStudenti.addStudente(anna);
servizioStudenti.addStudente(luca);
servizioStudenti.addStudente(marco);
console.log(servizioStudenti.listActive());
console.log(servizioStudenti.stampaRisultato(anna));
console.log(servizioStudenti.stampaRisultato(luca));
console.log(servizioStudenti.stampaRisultato(marco));
console.log("----------------------------------------");
