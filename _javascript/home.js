let contador = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){ // O setInterval serve para criar um intervalo para a execução da function
    nextImage();
},3000)

function nextImage(){
    contador++
    if(contador>4) {
        contador = 1;
    }

    document.getElementById("radio"+contador).checked = true;
}