function checkEnter(event) {
    if (event.key === "Enter") {
        calculate();
    }
}

function calculate() {
    const displayvw = document.getElementById('displayvw').value;
    const resultado = document.getElementById('resultado');

    try {
        const result = eval(displayvw);
        resultado.innerHTML = `${result}`;
    } catch (error) {
        resultado.innerHTML = "Erro na expressão";
    }
}

function calc(){
    document.getElementById("calculadora").style.display="block"
    document.getElementById("news").style.display='none'
}
function news(){
    document.getElementById("news").style.display='block'
    document.getElementById("calculadora").style.display="none"
}

function numbercalc(number){
    var display= document.getElementById("displayvw");
    var currentValue= display.value;
    var newValue= currentValue+ number;
    display.value= newValue;
}   
