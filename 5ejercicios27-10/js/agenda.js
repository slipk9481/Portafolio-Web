function iniciarAgenda(){
    agenda=new Array(7);
    for(let i=0;i<7;i++){
        agenda[i]=new Array(4);
    }

    
    agenda[0][0]="lunes";
    agenda[1][0]="martes";
    agenda[2][0]="miercoles";
    agenda[3][0]="jueves";
    agenda[4][0]="viernes";
    agenda[5][0]="sabado";
    agenda[6][0]="domingo";

    for(let i=0;i<7;i++){
        for(let j=1;j<4;j++){
            agenda[i][j]="";
        }
    }

    imprimirAgenda();
}

function guardarAgenda(){
    var d=document.getElementById("dia").value;
    var h=document.getElementById("hora").value;
    var e=document.getElementById("evento").value;
    var des=document.getElementById("desc").value;

    agenda[d][1]=h;
    agenda[d][2]=e;
    agenda[d][3]=des;

    imprimirAgenda();
}

function imprimirAgenda(){
    var aBi='<table>';
    aBi+='<tr><th></th><th>hora</th><th>evento</th><th>descripcion</th></tr>';

    for(let i=0;i<7;i++){
        aBi+='<tr>';
        for(let j=0;j<4;j++){
            if(j==0 && agenda[i][1]!=""){
                aBi+='<td class="azul">'+agenda[i][j]+'</td>';
            }else{
                aBi+='<td>'+agenda[i][j]+'</td>';
            }
        }
        aBi+='</tr>';
    }
    aBi+='</table>';

    document.getElementById("impAgenda").innerHTML=aBi;
}