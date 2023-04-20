function agregarComentario(evento) {
    //Evito que recargue la página
    evento.preventDefault();

    //Obtengo los valores ingresados
    let textoComentario = document.getElementById('textoComentario').value;
    let puntaje = document.getElementById('puntaje-feedback').value;
    if (textoComentario === ""){
        alert("Ingrese su opinion para poder publicarlo")
    }
    else {
        //Agrego el feedback a la página
        let texto = document.createTextNode(textoComentario + '. Puntaje: ' + puntaje + '/5');
        let parrafo = document.createElement('p')
        parrafo.appendChild(texto);

        document.getElementById('listadoComentarios').appendChild(parrafo);
    }



    //Reinicio los valores de los input
    document.getElementById('textoComentario').value = '';
    document.getElementById('puntaje-feedback').value = '1';
}

document.getElementById('enviarOpinion')
    .addEventListener('click', agregarComentario)