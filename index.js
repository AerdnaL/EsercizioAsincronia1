const base =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
const op = 'get';
const key = '7a282772';
const URL = base + '/' + op + '?key=' + key;

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

function fetchDati(url, callback) {
  fetch(URL)
    .then(
      (response) => response.json(),
      (error) => alert(error)
    )
    .then((data) => callback(data));
}

fetchDati(URL, (dati) => {
  const db = JSON.parse(dati);
  Biblioteca1.elencoLibri = db;
});

const inputTesto = document.getElementById('inputTesto');
const spazioRisultati = document.getElementById('spazioRisultati');

inputTesto.addEventListener('input', () => {
  spazioRisultati.replaceChildren();
  Biblioteca1.ricercaLibri(inputTesto.value);
});
