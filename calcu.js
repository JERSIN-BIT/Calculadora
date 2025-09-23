let resul = document.getElementById('resul');

function agregarNumero(numero){
    resul.value += numero;
}
function agregarOperacion(operacion){
    if(operacion === 'C') {
        resul.value = '';
        return;
    }
    else if (operacion === '='){
        resul.value = eval(resul.value);
        return;
    }
    resul.value += operacion;
}