let numeroSorteado = 6;

let palpite = Number(prompt("Tente adivinhar o número sorteado (entre 0 e 10):"));

while (palpite !== numeroSorteado) {
    alert("Tente novamente");
    
    
    let palpite = Number(prompt("Tente adivinhar o número sorteado (entre 0 e 10):"));
}
alert("Parabéns, você acertou!");
