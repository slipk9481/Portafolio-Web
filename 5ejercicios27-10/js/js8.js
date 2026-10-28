function bidimensional_ocho(){
    arregloOcho=new Array(5);
    for(let i=0;i<5;i++){
        arregloOcho[i]=new Array(5);
    }
    llenar_arregloOcho();
}

function llenar_arregloOcho(){
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            arregloOcho[i][j]=5;
        }
    }
   
    arregloOcho[1][1]="";
    arregloOcho[1][2]="";
    arregloOcho[1][3]="";

    arregloOcho[3][1]="";
    arregloOcho[3][2]="";
    arregloOcho[3][3]="";

    imprimir_arregloOcho();
}

function imprimir_arregloOcho(){
    var aBi='';
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            if(arregloOcho[i][j]==5){
                aBi+='<div style="background-color:#00FF00; color:#000000; border:1px solid #ccc; text-align:center; width:35px; display:inline-block;">'+arregloOcho[i][j]+'</div>';
            }else{
                aBi+='<div style="background-color:#FFFFFF; color:#000000; border:1px solid #ccc; text-align:center; width:35px; display:inline-block;">'+arregloOcho[i][j]+'</div>';
            }
        }
        aBi+='<br>';
    }
    document.getElementById("impOcho").innerHTML=aBi;
}