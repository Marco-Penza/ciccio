


let nome: string = "Marco";
const contenuto = document.getElementById("contenuto");
if (contenuto) {
    contenuto.innerHTML = `Ciao ${nome}!`;
}

let nome1: string = "Marco";
const contenuto1 = document.getElementById("contenuto2");
if (contenuto1) {
    contenuto1.innerHTML = `Ciao ${nome1}!`;
}

// Esercizio fare una funzione che restituisca solo gli studenti attivi usa il filter
/*interface Studenti {
    id: string;
    name: string;
    grades: number[];
    isActive: boolean;
}
const students: Studenti[] = [
    {id:"1", name: "Mario", grades: [7, 8, 6],
        isActive: true},
    {id:"2", name: "Luigi", grades: [5, 6],
        isActive: false},
    {id:"3", name: "Anna", grades: [9, 8, 10],
        isActive: true },
    {id:"4", name: "Marco", grades: [4, 2, 10],
        isActive: true},
    {id:"5", name: "Luigia", grades: [9, 10],
        isActive: false},
    {id:"6", name: "pippo", grades: [9, 8, 10],
        isActive: true }
];

function studentiAttivi(students: Studenti[]) {
    return students.filter(pippo => pippo.isActive);
}

const pippo = studentiAttivi(students);
console.log(pippo);

function studentiMediaVoti(students: Studenti[]) {
    return students.filter(studente => {
        let somma = 0;
        let mediaVoti = 0;
            studente.grades.forEach(voto => {
                somma += voto;
            });
              mediaVoti = somma / studente.grades.length;
            return mediaVoti > 7;
            });
}
*/
//const studentiMediaAlta = studentiMediaVoti(students);
//console.log(studentiMediaAlta);

//const serviziDiretti: StudenteService[] = [new StudenteService()];
// ora posso usare l’oggetto dentro l’array
//serviziDiretti[0].addStudente(mario);
//console.log(serviziDiretti[0].listActive());


//esercizio vecchio
/*
class Dipendente {
    public nome:string = "";
    public cognome:string = "";
    public eta:number = 0;
    private stipendioBase:number = 0;
    
    constructor(nome:string, cognome:string, eta:number, stipendioBase:number) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.stipendioBase = stipendioBase;
    }
    calcolaStipendio():void {
        return console.log("Lo stipendio di :" + this.nome + " " + this.cognome + " è " + this.stipendioBase)
    }
    getDescrizione():void {
        return console.log(this.nome + " " + this.cognome + " " + this.eta + " " + this.stipendioBase)
    }
}

class Manager extends Dipendente {
    constructor(nome:string,cognome:string, eta:number, stipendioBase:number) {
        super(nome, cognome, eta, stipendioBase, bonus)
    }
    
}
*/

// esercizio
interface Studente {
    id: string;
    name: string;
    voti: number[];
    active: boolean;
}
class StudenteService {
    listaStudenti: Studente[] = [];

    addStudente(studente: Studente):void{
        this.listaStudenti.push(studente)
    }
    removeStudente(s: Studente):void{
        this.listaStudenti = this.listaStudenti.filter(p => p.id != s.id)
    }
    listActive(): Studente[]{
        return this.listaStudenti.filter(a => a.active === true);
    }
    calcolaMedia(s: Studente): number {
        if (s.voti.length === 0) {
            return 0;
        }
        const somma: number = s.voti.reduce((acc: number, voto: number) => {
            return acc + voto;
        }, 0);
        const media: number = somma / s.voti.length;
        return media;
    }

    isPromosso(s: Studente):boolean {
        return this.calcolaMedia(s) >= 6;
    }

    stampaRisultato(s: Studente) :string {
        return "il voto di " + s.name + " è " + this.calcolaMedia(s) + " e risulta " + (this.isPromosso(s) ? "Pomosso" :  "Bocciato");
    }
}
const mario: Studente = {
    id: "1",
    name: "Mario",
    voti: [7, 8, 6, 8, 1, 3],
    active: true
};

const anna: Studente = {
    id: "2",
    name: "Anna",
    voti: [9, 7, 8],
    active: true
};

const luca: Studente = {
    id: "3",
    name: "Luca",
    voti: [5, 6],
    active: false
};

const marco: Studente = {
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
console.log("----------------------------------------")