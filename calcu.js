// Guardamos en la variable "resul" la cajita donde se muestran los números
let resul = document.getElementById('resul');

// Esta función se usa cuando presionas un número en la calculadora
function agregarNumero(numero){
    // Va sumando (pegando) el número presionado al final de lo que ya había
    resul.value += numero;
}

// Esta función se usa cuando presionas un botón de operación (+, -, C, =)
function agregarOperacion(operacion){
    // Si el botón es "C", borra todo lo que hay en la pantalla
    if(operacion === 'C') {
        resul.value = '';
        return; // Salir de la función
    }
    // Si el botón es "=", hace la cuenta y muestra el resultado
    else if (operacion === '='){
        resul.value = eval(resul.value);
        return; // Salir de la función
    }
    // Si es cualquier otro signo (+, -, *, /), lo añade a lo que ya está escrito
    resul.value += operacion;
}
