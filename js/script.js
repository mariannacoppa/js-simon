// creo array che conterrà 5 numeri casuali
let randomNumbersArray = [];
// ciclo l'array generando 5 numeri casuali
for (let i = 0; i < 5; i++) {
    randomNumbersArray[i] = Math.floor(Math.random() * 100 + 1);
    // console.log(randomNumbersArray[i]);
    // richiamo l'elemento html 
    let ul = document.getElementById('random-numbers');
    // creo list item contenente i singoli numeri
    let li = document.createElement('li');
    // inserisco i numeri nel list item
    li.innerText = randomNumbersArray[i];
    // appendo i list item all'ul
    ul.appendChild(li);
}
// creo intervallo di tempo in cui i numeri sono visibili
let timeList = setTimeout(function () {
    // riprendo la lista html
    let ul = document.getElementById('random-numbers');
    // creo istruzione condizinale per cui la lista scompare dopo il tempo impostato dalla funzione
    if (ul != null) {
        ul.remove();
    }
    // terminato il tempo in cui vengono mostrati i numeri, avvio la funzione per far inserire all'utente i 5 numeri
    let timePrompt = setTimeout(function () {
        // creo array vuoto per contenere i numeri inseriti dall'utente
        let userNumberArray = [];
        // creo array contenente i numeri presenti sia nell'array randomico sia in quello con i numeri dell'utente
        let comparedNUmbers = [];
        for (let i = 0; i < 5; i++) {
            // permetto all'utente di inserire i numeri
            userNumberArray[i] = parseInt(prompt(`Inserisci il ${i + 1}° numero`));
        }
        for (let i = 0; i < userNumberArray.length; i++) {
            // confronto i numeri inseriti dall'utente con i numeri random
            if (randomNumbersArray.indexOf(userNumberArray[i]) != -1) {
                comparedNUmbers.push(userNumberArray[i]);
            }
        }
        console.log(randomNumbersArray);
        console.log(userNumberArray);
        console.log(comparedNUmbers);
        alert(`Hai indovinato ${comparedNUmbers.length} numeri: ${comparedNUmbers}`);
    }, 1000)
}, 3000);