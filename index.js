// Chiave: 7a282772

const base =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
const op = 'get';
const key = '7a282772';
const URL = base + '/' + op + '?key=' + key;



/*const db = (URL) => { non funge
  fetch(URL)
    .then(
      (response) => response.json(),
      (error) => alert(error)
    )
    .then((data) => {
      const bo = JSON.parse(data);
      console.log(data);
      return bo;
    });
};

console.log(db);*/

/*fetch(URL)
  .then(
    (response) => response.json(),
    (error) => alert(error)
  )
  .then((data) => {
    const db = JSON.parse(data);
    console.log(db);
  });*/

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
/*Biblioteca1.elencoLibri = [
  { autore: 'Dante Alighieri', titolo: 'La Divina Commedia' },
  { autore: 'Dante Alighieri', titolo: 'De Vulgari Eloquentia' },
  { autore: 'Alessandro Manzoni', titolo: 'I Promessi Sposi' },
  { autore: 'Luigi Pirandello', titolo: 'Il Fu Mattia Pascal' },
  { autore: 'Luigi Pirandello', titolo: 'Uno, Nessuno, Centomila' },
  { autore: 'Luigi Pirandello', titolo: 'Mal Giocondo' },
];*/

Biblioteca1.elencoLibri;

const inputTesto = document.getElementById('inputTesto');
const spazioRisultati = document.getElementById('spazioRisultati');

inputTesto.addEventListener('input', () => {
  spazioRisultati.replaceChildren();
  Biblioteca1.ricercaLibri(inputTesto.value);
});
