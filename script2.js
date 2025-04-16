// Função para calcular usando 'var'
function calcularComVar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
        return;
    }

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
                document.getElementById("resultado").innerHTML = "Erro: divisão por zero.";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operação inválida.";
    }

    document.getElementById("resultado").innerHTML = "Resultado com var: " + resultado;
}

// Função para calcular usando 'let'
function calcularComLet() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
        return;
    }

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
                document.getElementById("resultado").innerHTML = "Erro: divisão por zero.";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operação inválida.";
    }

    document.getElementById("resultado").innerHTML = "Resultado com let: " + resultado;
}

// Função para calcular usando 'const'
function calcularComConst() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
        return;
    }

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
                document.getElementById("resultado").innerHTML = "Erro: divisão por zero.";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operação inválida.";
    }

    document.getElementById("resultado").innerHTML = "Resultado com const: " + resultado;
}
