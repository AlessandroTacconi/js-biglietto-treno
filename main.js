'use strict';

// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
const kmPasseggero = parseInt(prompt('Quanti km devi percorrere?'));

const etaPasseggero = parseInt(prompt('Quanti anni hai?'));
// <Creare due prompt per le info>

/* Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
 */

// - Il prezzo del biglietto è definito in base ai km (0.21 € al km)
const prezzoKm = kmPasseggero * 0.21;
// <Calcolare prezzo al kilometro>

// - Va applicato uno sconto del 20% per i minorenni
// - Va applicato uno sconto del 40% per gli over 65.
const prezzoMinori = (prezzoKm * 0.8).toFixed(2);
const prezzoOver65 = (prezzoKm * 0.6).toFixed(2);

if (etaPasseggero < 18) {
  console.log(`${prezzoMinori}`);
} else if (etaPasseggero > 64) {
  console.log(`${prezzoOver65}`);
} else {
  console.log(`${prezzoKm}`);
}

// <Calcolare condizioni sconti sconti>

/* L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/
