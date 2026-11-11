const btnCalcular=document.getElementById('btnCalcular');
if (btnCalcular) {
    btnCalcular.addEventListener('click', procesarBoletos);
}

function procesarBoletos() {
    const nombre=document.getElementById('nombre').value;
    const rfc=document.getElementById('rfc').value;
    const totalPersonas=parseInt(document.getElementById('numPersonas').value)||0;
    const adultos=parseInt(document.getElementById('numAdultos').value)||0;
    const ninos=parseInt(document.getElementById('numNinos').value)||0;
    const divError=document.getElementById('mensajeError');

    if ((adultos+ninos)!==totalPersonas) {
        divError.innerHTML=`<p style="color: red;">El número total de personas (${totalPersonas}) no coincide con la suma de adultos (${adultos}) y niños (${ninos}).</p>`;
        return;
    }
    let zona="";
    let precioAdulto=0;
    let precioNino=0;

    if (totalPersonas===5&&adultos+ninos===5) {
        zona="Zona A";
        precioAdulto=5500;
        precioNino=3500;
    } else if (adultos===5&&ninos===3&&totalPersonas===8) {
        zona="Zona B";
        precioAdulto=2000;
        precioNino=1000;
    } else if (adultos===10&&ninos===6&&totalPersonas===16) {
        zona="Zona C";
        precioAdulto=500;
        precioNino=250;
    } else {
        divError.innerHTML=`<p style="color: red;">No se pueden comprar boletos. La combinación ingresada no cumple con las condiciones de ninguna zona permitida.</p>`;
        return;
    }

    const subtotalAdultos=adultos*precioAdulto;
    const subtotalNinos=ninos*precioNino;
    const totalPagar=subtotalAdultos+subtotalNinos;
    const datosReserva={
        nombre:nombre,
        rfc:rfc,
        totalPersonas:totalPersonas,
        adultos:adultos,
        ninos:ninos,
        zona:zona,
        subtotalAdultos:subtotalAdultos,
        subtotalNinos:subtotalNinos,
        totalPagar:totalPagar
    };
    localStorage.setItem('reservaBoletos', JSON.stringify(datosReserva));

    window.location.href="resultado.html";
}

window.onload=function() {
    const contenedorResultado=document.getElementById('resultadoCompra');
    if (contenedorResultado) {
        const datosGuardados=localStorage.getItem('reservaBoletos');
        if (datosGuardados) {
            const datos=JSON.parse(datosGuardados);
            contenedorResultado.innerHTML= `
                <h3>Resumen de Compra</h3>
                <p><strong>Nombre:</strong> ${datos.nombre}</p>
                <p><strong>RFC:</strong> ${datos.rfc}</p>
                <hr>
                <p><strong>Zona asignada:</strong> ${datos.zona}</p>
                <p><strong>Total de personas:</strong> ${datos.totalPersonas}</p>
                <p><strong>Adultos:</strong> ${datos.adultos} (Subtotal: $${datos.subtotalAdultos})</p>
                <p><strong>Niños:</strong> ${datos.ninos} (Subtotal: $${datos.subtotalNinos})</p>
                <hr>
                <p><strong>Total a pagar:</strong> $${datos.totalPagar}</p>
            `;
        } else {
            contenedorResultado.innerHTML=`<p>No hay datos de compra registrados.</p>`;
        }
    }
};