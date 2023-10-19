document.addEventListener("DOMContentLoaded", function() {
    const calcularButton = document.getElementById("calcular");
    const cifrarButton = document.getElementById("cifrar");
    const descifrarButton = document.getElementById("descifrar");
    const mensajeInput = document.getElementById("mensaje");
    const resultadoDiv = document.getElementById("resultado");
    
    calcularButton.addEventListener("click", function() {
        const numLados = parseInt(document.getElementById("numLados").value);
        const numVueltas = parseInt(document.getElementById("numVueltas").value);
        const mensaje = mensajeInput.value;
        const caracteresPorCilindro = numLados * numVueltas;
        resultadoDiv.innerHTML = `Se pueden introducir ${caracteresPorCilindro} caracteres.`;
    });
    
    cifrarButton.addEventListener("click", function() {
        const numLados = parseInt(document.getElementById("numLados").value);
        const numVueltas = parseInt(document.getElementById("numVueltas").value);
        const mensaje = mensajeInput.value;
        const caracteresPorCilindro = numLados * numVueltas;
        const cifrado = escitalaCifrar(mensaje, numLados, numVueltas);
        resultadoDiv.innerHTML = `Mensaje cifrado: ${cifrado}`;
    });
    
    descifrarButton.addEventListener("click", function() {
        const numLados = parseInt(document.getElementById("numLados").value);
        const numVueltas = parseInt(document.getElementById("numVueltas").value);
        const mensaje = mensajeInput.value;
        const caracteresPorCilindro = numLados * numVueltas;
        const descifrado = escitalaDescifrar(mensaje, numLados, numVueltas);
        resultadoDiv.innerHTML = `Mensaje descifrado: ${descifrado}`;
    });
    
    function escitalaCifrar(mensaje, lados, vueltas) {
        let cifrado = "";
        for (let i = 0; i < vueltas; i++) {
            for (let j = 0; j < lados; j++) {
                const index = j * vueltas + i;
                if (index < mensaje.length) {
                    cifrado += mensaje[index];
                }
            }
        }
        return cifrado;
    }
    
    function escitalaDescifrar(mensaje, lados, vueltas) {
        let descifrado = "";
        const caracteresPorCilindro = Math.ceil(mensaje.length / vueltas);
        for (let i = 0; i < caracteresPorCilindro; i++) {
            for (let j = 0; j < vueltas; j++) {
                const index = i + j * caracteresPorCilindro;
                if (index < mensaje.length) {
                    descifrado += mensaje[index];
                }
            }
        }
        return descifrado;
    }
});


