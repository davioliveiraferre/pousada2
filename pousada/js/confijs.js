


let quarto = document.getElementById("quarto");
let diarias = document.getElementById("diarias");

console.log(quarto);
console.log(diarias);

let cafe = document.getElementById("cafe");
let almoco = document.getElementById("almoco");
let jantar = document.getElementById("jantar");

function calcularTotal() {

    let preco = Number(quarto.value);
    let quantidade = Number(diarias.value);

    let hospedagem = preco * quantidade;

    let adicionais = 0;

    if (cafe.checked) {
        adicionais = adicionais + (40 * quantidade);
    }

    if (almoco.checked) {
        adicionais = adicionais + (60 * quantidade);
    }

    if (jantar.checked) {
        adicionais = adicionais + (70 * quantidade);
    }

    let valorFinal = hospedagem + adicionais;

    document.getElementById("hospedagem").innerHTML =
        "Hospedagem: R$ " + hospedagem.toFixed(2);

    document.getElementById("adicionais").innerHTML =
        "Adicionais: R$ " + adicionais.toFixed(2);

    document.getElementById("valorFinal").innerHTML =
        "TOTAL A PAGAR: R$ " + valorFinal.toFixed(2);
}

quarto.addEventListener("change", calcularTotal);
diarias.addEventListener("input", calcularTotal);

cafe.addEventListener("change", calcularTotal);
almoco.addEventListener("change", calcularTotal);
jantar.addEventListener("change", calcularTotal);

calcularTotal();
