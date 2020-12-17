// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente (occhio alle maiuscole, se volete potete convertire il nome prima inserirlo).
// Scrivi anche la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova

//#1 chiediamo all'utente di inserire il cognome
var cognome=prompt('inserisci il tuo cognome');
// console.log(cognome);
//#2 creare una lista di cognomi
var listaCognomi=["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
console.log(listaCognomi);
//#3 inseriamo il cognome richiesto dall'utente nella nostra lista
 listaCognomi.push(cognome);
console.log(listaCognomi);
//#4 riordino i cognomi in ordine alfabetico
listaCognomi.sort();//sort singifica riordino
//#5 stampo i cognomi in ordine alfabetico
console.log(listaCognomi);
//#6 trovare posizione del cognome
var a = listaCognomi.indexOf(cognome);
// #7stampo della posizione +1
console.log(a+1);
