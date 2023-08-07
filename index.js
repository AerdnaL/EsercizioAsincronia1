// Chiave: 7a282772

class Biblioteca {
  constructor() {
    this.elencoLibri = [];
  }

  ricercaLibri(stringa) {
    let trovato = '';
    let contaOccorrenze = 0;

    for (let i = 0; i < this.elencoLibri.length; i++) {
      let concatenaAutoriTitoli =
        `${this.elencoLibri[i].autore} ${this.elencoLibri[i].titolo}`.toLowerCase();
      if (concatenaAutoriTitoli.includes(stringa.toLowerCase())) {
        trovato = `${this.elencoLibri[i].autore} ${this.elencoLibri[i].titolo}`;
        contaOccorrenze++;
      }
    }

    if (contaOccorrenze == 1) {
      spazioRisultati.textContent = trovato;
    } else {
      spazioRisultati.textContent = contaOccorrenze;
    }
    console.log(trovato);
    console.log(contaOccorrenze);
  }
}

const Biblioteca1 = new Biblioteca();
Biblioteca1.elencoLibri = [
  { autore: 'Dante Alighieri', titolo: 'La Divina Commedia' },
  { autore: 'Dante Alighieri', titolo: 'De Vulgari Eloquentia' },
  { autore: 'Alessandro Manzoni', titolo: 'I Promessi Sposi' },
  { autore: 'Luigi Pirandello', titolo: 'Il Fu Mattia Pascal' },
  { autore: 'Luigi Pirandello', titolo: 'Uno, Nessuno, Centomila' },
  { autore: 'Luigi Pirandello', titolo: 'Mal Giocondo' },
];

const inputTesto = document.getElementById('inputTesto');
const spazioRisultati = document.getElementById('spazioRisultati');

inputTesto.addEventListener('input', () => {
  spazioRisultati.replaceChildren();
  Biblioteca1.ricercaLibri(inputTesto.value);
});
