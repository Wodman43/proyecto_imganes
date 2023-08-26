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
        imagen: URL.createObjectURL(imagen),
        cant:0,
        

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
            let contador2 = imagen.cant;
            const likes = document.createElement('p');
            likes.textContent= `likes:${contador2}`;
            // likes.addEventListener('click',()=>{
            //    contador2 ++;
            //     console.log(contador2);
            //     likes.textContent = `likes:${contador2}`
              
            // })
            const corazon = document.createElement('img');
            corazon.src = 'https://cdn-icons-png.flaticon.com/128/6023/6023551.png'
            corazon.style.width = '50px';
            // let contador = 1;
            corazon.addEventListener('click',()=>{
           
                // if(contador === 0){
                    // corazon.src = 'https://cdn-icons-png.flaticon.com/128/6023/6023551.png';
                    corazon.src = 'https://cdn-icons-png.flaticon.com/128/5186/5186331.png';
                    contador2 ++;
                    // contador=1
                    
                    likes.textContent= `likes:${contador2}`;
                   
                    console.log(contador2);}
                //    console.log(resultado);
                // }else if(contador===1){
                //     corazon.src = 'https://cdn-icons-png.flaticon.com/128/5186/5186331.png';
                //     contador=0;
                    
                    // contador2 --;
                    // likes.textContent= `likes:${contador2}`;
                    // console.log(contador2);
                
                )
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
            listatweets.appendChild(likes);
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

