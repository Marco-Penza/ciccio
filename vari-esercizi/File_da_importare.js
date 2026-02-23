import { Sviluppatore as BaseSviluppatore } from "./script.js";

export class SviluppatoreCustom extends BaseSviluppatore {
    calcolaStipendio() {
        if (this.livello === "junior") {
            return "lo stipendio di " + this.nome + " " + this.cognome + " per il junior developer è : " + this.stipendioBase * 1.05;
        } else if (this.livello === "mid") {
            return "lo stipendio di " + this.nome + " " + this.cognome + " per il mid developer è : " + this.stipendioBase * 1.50;
        } else { 
            return "lo stipendio di " + this.nome + " " + this.cognome + " per il senior developer è : " + this.stipendioBase * 2;
        }
    }
}
import { Manager } from "./script.js";
class ManagerAziendaX extends Manager {
    calcolaStipendio() {
        return console.log("Lo stipendio attuale è : " + (this.stipendioBase + this.bonus));
    }
}


