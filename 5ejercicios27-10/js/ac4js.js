var alumnos = new Array(10);

function cargarAlumnos() {
    for (let i = 0; i < 10; i++) {
        alumnos[i] = prompt("Captura un nombre");
    }
    
    var mensaje = '';
    for (let indice in alumnos) {
        mensaje += '<div> posicion: ' + indice + ' valor: ' + alumnos[indice] + '</div>';
    }
    document.getElementById("impAlumnos").innerHTML = mensaje;
}

function eliminarAlumnos() {
    let inicio = prompt("De donde empezar a eliminar");
    let fin = prompt("Hasta donde eliminar");
    alumnos.splice(inicio, fin - inicio + 1);

    var cortado = '';
    for (let indice in alumnos) {
        cortado += '<div> posicion: ' + indice + ' valor: ' + alumnos[indice] + '</div>';
    }
    document.getElementById("impEliminados").innerHTML = cortado;
}

function vaciarNombre() {
    let nom = prompt("Nombre a vaciar");
    
    var vaciado = '';
    for (let indice in alumnos) {
        if (alumnos[indice] == nom) {
            alumnos[indice] = "";
        }
        vaciado += '<div> posicion: ' + indice + ' valor: ' + alumnos[indice] + '</div>';
    }
    document.getElementById("impVaciado").innerHTML = vaciado;
}