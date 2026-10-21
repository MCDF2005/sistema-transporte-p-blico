
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    const data = document.getElementById("data").value;
    const passageiros = Number(
        document.getElementById("passageiros").value
    );

    if (origem === destino) {
        event.preventDefault();
        alert("A origem e o destino não podem ser iguais!");
        return;
    }

    if (passageiros < 1 || passageiros > 39) {
        event.preventDefault();
        alert("Escolha entre 1 e 39 passageiros.");
        return;
    }

    if (data === "") {
        event.preventDefault();
        alert("Selecione a data da viagem.");
        return;
    }

    const preco = 5;
    const total = preco * passageiros;

    alert(
        "Resumo da viagem:\n" +
        "Origem: " + origem + "\n" +
        "Destino: " + destino + "\n" +
        "Passageiros: " + passageiros + "\n" +
        "Valor total: R$ " + total.toFixed(2).replace(".", ",")
    );
});
