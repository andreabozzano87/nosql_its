/*

Sintassi basissima di Javascript che ci serve per interagire con mongodb tramite la mongo shell
Love you, studenti ITS 13.2 <3

*/

// Dichiarazione di variabili
var nome = "Mario";
let età = 25;
const paese = "Italia";
// sostanzialmente cambia lo scope: var sono funzioni e variabili che possono essere locali e globali, questo vuol
// dire che puoi dichiarare una variabile var prima che le venga assegnato un valore, ma sarà undefined finché non lo
// avrà. Let è simile, va bene per le variabili all'interno di uno stesso blocco, const in generale non sono valori
// mutabili


// Tipi di dato: stringhe, booleani, numeri, oggetti, array
let stringa = "Ciao";
let numero = 10;
let booleano = true;
let oggetto = { chiave: "valore" };
let array = [1, 2, 3, 4];

// Funzioni
// definizione:
function saluta(nome) {
    return "Ciao, " + nome + "!";
  }

// Chiamata:
let messaggio = saluta("Mario");
console.log(messaggio);  // Output: Ciao, Mario!

// Oggetti JavaScript: struttura chiave-valore
let persona = {
    nome: "Mario",
    età: 25,
    paese: "Italia"
  };

// JSON: JavaScript Object Notation, usato per passare info tra client e server
let myJSON =  {
    "nome": "Mario",
    "età": 25,
    "paese": "Italia"
  }
  
// Convertire un oggetto JavaScript in JSON  
let jsonString = JSON.stringify(persona);
console.log(jsonString);  // Output: {"nome":"Mario","età":25,"paese":"Italia"}
  
// da JSON a oggetto JavaScript
let jsonString2 = '{"nome":"Mario","età":25,"paese":"Italia"}';
let persona2 = JSON.parse(jsonString);
console.log(persona2.nome);  // Output: Mario