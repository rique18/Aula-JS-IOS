let idade = prompt("Digite a sua idade:");

if (idade < 18) {
    alert("O usuário é menor de idade.");
} else if (idade >= 18 && idade < 60) {
    alert("O usuário é adulto.");
} else {
    alert("O usuário é idoso.");
}