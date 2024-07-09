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
let time = setInterval(function () {
    console.log('ciao');
}, 3000);