var foto =["img/foto0.jpg","img/foto1.jpg","img/foto2.jpg","img/foto3.jpg","img/foto4.jpg"];
var imagen = document.getElementById("foto");
let c=0;
function sig(){
    c++;
    if(c<=foto.length-1){
        imagen.src= foto[c];   
    }else{
        c=0;
        imagen.src= foto[c];  ;
    }    
}
function ant(){
    c--
    if(c>=0){
    imagen.src= foto[c];
    }else{
        c=foto.length-1;
        imagen.src= foto[c];
    }
}