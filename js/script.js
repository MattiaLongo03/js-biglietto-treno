/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

/*input numero km ed età
calcolo prezzo:
prezzo finale=0.21*numero km
SE età >=1 & età <=17
prezzo finale=prezzo finale-(prezzo finale*20/100)
ALTRIMENTI SE età >=65
prezzo finale=prezzo finale-(prezzo finale*40/100)
FINE SE
output prezzo finale
*/

const n_km = parseInt(prompt('Inserisci quanti kilometri'));
const age = parseInt(prompt('Inserisci quanti anni hai'));
let prezzo_finale = 0.21 * n_km;
if (age >= 1 && age <= 17){
    prezzo_finale = prezzo_finale-(prezzo_finale * 20 / 100);
} else if (age >= 65){
    prezzo_finale = prezzo_finale-(prezzo_finale * 40 / 100);
}
prezzo_finale = prezzo_finale.toFixed(2);
console.log(prezzo_finale+'€');