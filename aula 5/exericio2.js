let contador = 1

while (contador <= 10) {
    console.log(`Valor contador: ${contador}`);
    contador++ 
}
console.log(`fim`);

let soma = 0;
let numero 
do {
    numero = Number(prompt(`digite um numero pra somar(ou 0 para sair):`))
    soma += numero
} while (numero !== 0);
alert(`a soma total de todos os numeros digitados é : ${soma}`);

let numero2 = prompt(`digite um numero para ver a tabuada:`)
    alert(`tabuada do ${numero2}`);

for (let i = 0; i <= 10; i++) {
   let resultado = numero2 * i;
   alert(`${numero2} x ${i} = ${resultado}`)
}

