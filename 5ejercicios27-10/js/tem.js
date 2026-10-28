function capturarTemp(){
    let temp=new Array(7);
    let suma=0;
    var cadena='';

    for(let i=0; i<7; i++){
        let valor=prompt("Captura la temperatura del dia");
        temp[i]=parseFloat(valor);
        suma=suma+temp[i];
        cadena+=temp[i]+"<br>";
    }

    let promedio=suma/7;

    cadena+="<hr>";
    cadena+="Total: "+suma+"<br>";
    cadena+="temperatura promedio semana: "+promedio;

    document.getElementById("impTemp").innerHTML=cadena;
}