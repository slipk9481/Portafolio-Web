document.addEventListener('DOMContentLoaded', () => {


    const formAutos = document.getElementById('form-autos');
    if (formAutos) {
        formAutos.addEventListener('submit', (e) => {
            e.preventDefault();
            const modelo = document.getElementById('auto-modelo').value;
            const color = document.getElementById('auto-color').value;
            alert(`Datos de Auto capturados:\nModelo: ${modelo}\nColor: ${color}`);
        });
    }


    const formEscuderia = document.getElementById('form-escuderia');
    if (formEscuderia) {
        formEscuderia.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('esc-nombre').value;
            const desc = document.getElementById('esc-desc').value;
            alert(`Datos de Escudería capturados:\nNombre: ${nombre}\nDescripción: ${desc}`);
        });
    }


    const formCorredor = document.getElementById('form-corredor');
    if (formCorredor) {
        formCorredor.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('corr-nombre').value;
            const app = document.getElementById('corr-app').value;
            const edad = document.getElementById('corr-edad').value;
            alert(`Datos de Corredor capturados:\nNombre completo: ${nombre} ${app}\nEdad: ${edad}`);
        });
    }


    const formRelaciones = document.getElementById('form-relaciones');
    if (formRelaciones) {
        formRelaciones.addEventListener('submit', (e) => {
            e.preventDefault();
            const autoSelect = document.getElementById('rel-auto1').value;
            const corredorSelect = document.getElementById('rel-corredor').value;
            alert(`Relación capturada:\nAuto: ${autoSelect}\nPiloto: ${corredorSelect}`);
        });
    }

});