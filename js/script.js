
// creo array che conterrà 5 numeri casuali
let randomNumbersArray = [];
// ciclo l'array generando 5 numeri casuali
for (let i = 0; i < 5; i++) {
    randomNumbersArray[i] = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumbersArray[i]);
}
