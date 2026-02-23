import { SviluppatoreCustom } from "./File_da_importare.js";

class Azienda {
    dipendenti = [];

    constructor(nome) {
        this.nome = nome;
    }
    aggiungiDipendente(dipendente) {
        this.dipendenti.push(dipendente);
    }
}
import { Manager as ManagerAzienda1 } from "./script.js"
class ManagerX extends ManagerAzienda1 {
    constructor(nome, cognome, eta, stipendio, bonus) {
        super(nome, cognome, eta, stipendio, bonus)
    }
    calcolaStipendio() {
        return "Lo stipendio attuale di " + this.nome + " " + this.cognome + " è " +  (this.stipendioBase + this.bonus + 5000);
    }
}

export { ManagerX };

let overzoom = new Azienda("overzoom");

const dev2 = new SviluppatoreCustom("Luca", "Rossi", 25, 1500, "senior");
const dev3 = new SviluppatoreCustom("Pasquale", "Rossi", 30, 1500, "junior");
const dev4 = new SviluppatoreCustom("Maria", "Rossi" , 40, 1500, "mid");
const dev5 = new ManagerX("Pippo", "x", 30, 1500, 5000);

dev5.calcolaStipendio();

overzoom.aggiungiDipendente(dev2);
overzoom.aggiungiDipendente(dev3);
overzoom.aggiungiDipendente(dev4);


overzoom.dipendenti.forEach(d => console.log("ecco il tuo stipendio :  ", d.calcolaStipendio()));

