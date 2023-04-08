//Constantes

const boton = document.querySelector("#boton")

/*Donde se escribe el muro*/
const post = document.getElementById('post')

/*El texto de la publicación*/
const input = document.getElementById('input')

//Función de hacer publicación en el muro

boton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target.id);

    //pub es el "texto escrito"=value dentro del input que se hizo en el HTML
    const pub = input.value;

    //Crear elemento div y p cada vez que se presione el botón
    const bloque = document.createElement('div');
    bloque.classList.add("chat");

    const texto = document.createElement("p");
    texto.innerHTML = pub;
    //El texto=p es hijo del bloque=div
    bloque.appendChild(texto);

    //Bloque se encuentra adentro de post
    post.appendChild(bloque);

    //Una vez le doy click al botón, este es el valor al que regresa mi input
    input.value = "";
});
