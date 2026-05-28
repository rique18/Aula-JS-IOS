let valorOriginal = prompt("Digite o valor original do produto (Ex: 1000):");

if (isNaN(valorOriginal) || valorOriginal <= 0) {
    alert("Por favor, insira um valor de produto válido.");
} else {
    let cupom = prompt("Informe o código promocional (DESC1, DESC2, DESC3, DESC4 ou DESC5):");
    
    cupom = cupom.toUpperCase(); 

    let porcentagemDesconto = 0;
    let cupomValido = true;

    switch (cupom) {
        case "DESC1":
            porcentagemDesconto = 5;
            break;
        case "DESC2":
            porcentagemDesconto = 10;
            break;
        case "DESC3":
            porcentagemDesconto = 15;
            break;
        case "DESC4":
            porcentagemDesconto = 20;
            break;
        case "DESC5":
            porcentagemDesconto = 25;
            break;
        default:
            cupomValido = false;
    }

    if (cupomValido) {
        let valorDesconto = (porcentagemDesconto / 100) * valorOriginal;
        let valorComDesconto = valorOriginal - valorDesconto;

        alert(`${porcentagemDesconto}% de desconto aplicado!`);
        alert(`Valor original do produto: R$ ${valorOriginal}`);
        alert(`Valor com desconto: R$ ${valorComDesconto}`);
    } else {
        alert("Erro: O código informado não é um cupom válido.");
    }
}
