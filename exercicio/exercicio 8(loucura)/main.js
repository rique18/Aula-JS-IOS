let altura = prompt("Digite a sua altura em metros (ex: 1.75):");
let peso = prompt("Digite o seu peso em quilogramas (ex: 70.5):");

let imc = peso / (altura * altura);

alert(`Seu IMC é: ${imc}`);

if (imc >= 18.5 && imc <= 24.9) {
    alert("O seu IMC está dentro do intervalo saudável.");
} else {
    alert("O seu IMC NÃO está dentro do intervalo saudável.");
}