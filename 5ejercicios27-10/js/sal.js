function calcular(){
    sueldos=new Array(3);
    for(let i=0;i<3;i++){
        sueldos[i]=new Array(3);
    }

    // Diseñador
    sueldos[0][0]=120;
    sueldos[0][1]=240;
    sueldos[0][2]=210;

    // Programador
    sueldos[1][0]=240;
    sueldos[1][1]=280;
    sueldos[1][2]=300;

    //Lider
    sueldos[2][0]=400;
    sueldos[2][1]=600;
    sueldos[2][2]=3000;

   
    var p=document.getElementById("puesto").value;
    var n=document.getElementById("nivel").value;
    var h=document.getElementById("horas").value;

  
    var total=sueldos[p][n] * h;

    document.getElementById("impTotal").innerHTML=total;
}