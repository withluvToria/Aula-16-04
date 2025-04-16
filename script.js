// Função que realiza o cálculo com base na operação escolhida
function calcular() {
    // Obter os valores dos inputs
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado;

    // Verificar se os valores são válidos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
        return;
    }

    // Realizar a operação escolhida
    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                document.getElementById("resultado").innerHTML = "Não é possível dividir por zero.";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            document.getElementById("resultado").innerHTML = "Operação inválida.";
            return;
    }

    // Exibir o resultado
    document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
}
