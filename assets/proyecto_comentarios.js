const formulario = document.querySelector('#formulario');
const listatweets = document.querySelector('#lista-tweets');



let tweets = [];

// Aqui voy a crear los listeners
eventlisteners();

function eventlisteners(){
    formulario.addEventListener('submit', agregartweet);   

    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearhtml();
    })
   

}
// aqui van las funciones 

function agregartweet(e){
    e.preventDefault();
    const tweet = document.getElementById('tweet');
    const imagen = tweet.files[0];
    console.log(tweet);
    if(!imagen){
        // alert('no puede estar vacio');
        mostrarerror('Este campo No puede estar vacio');
        return;
    }
   
    const tweetobj = {
        id: Date.now(),
        imagen: URL.createObjectURL(imagen)
    }

    tweets = [...tweets, tweetobj];
 
    console.log(tweets);
    crearhtml();
    formulario.reset();

}   

function mostrarerror(error){
    const mensajeerror = document.createElement('p');
    mensajeerror.textContent = error;
    mensajeerror.classList.add('error');

    const contenido =document.getElementById('contenido');
    contenido.appendChild(mensajeerror);
    setTimeout(()=> {
        mensajeerror.remove();}, 500);
    

}

function crearhtml(){ limpiarhtml();

    if(tweets.length > 0){
        tweets.forEach((imagen) =>{
            const botonborrar = document.createElement('a');
            botonborrar.classList= 'borrar-tweet';
            botonborrar.innerText = 'Eliminar';
            const corazon = document.createElement('ig');
            corazon.src = 'https://cdn-icons-png.flaticon.com/128/6023/6023551.png'
            corazon.style.width = '50px';
            contador = 0;
            corazon.addEventListener('click',()=>{
           
                if(contador === 0){
                    corazon.src = 'https://cdn-icons-png.flaticon.com/128/6023/6023551.png';
                    contador=1
                }else if(contador===1){
                    corazon.src = 'https://cdn-icons-png.flaticon.com/128/5186/5186331.png';
                    contador=0
                }
                
            })
            botonborrar.onclick = () => {
                borrartweet(imagen.id);
            }
            const img = document.createElement('img');
            img.src = imagen.imagen;
            img.style.width = '100px'
            listatweets.appendChild(img);


            img.appendChild(botonborrar);
            listatweets.appendChild(botonborrar);
            listatweets.appendChild(corazon);
        })
    }
    agregarstorage();
}

function borrartweet(id){
    console.log('Eliminando',id)
    tweets = tweets.filter(imagen => imagen.id!==id);
    crearhtml();
}

function limpiarhtml(){
    while (listatweets.firstChild){
        listatweets.removeChild(listatweets.firstChild);
    }
}


function agregarstorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

