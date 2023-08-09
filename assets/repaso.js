// const diahoy = new Date();

// Date.now();

// console.log(diahoy);

// let valor;
// valor = diahoy;

// console.log( typeof valor);

// let cumple = new Date('16-11-1978');
// cumple = new Date('November 16 1978');
// console.log(cumple);
// console.log(typeof cumple);

// cumple.toString();

// valor = diahoy.getMonth();

// console.log(diahoy);

// const fecha = new Date('2004-09-03');

// console.log(fecha);

// let cumple1 = fecha.getFullYear();
// let cumple2 = fecha.getMonth()+1;
// let cumple3 = fecha.getDay()-1;

// console.log(cumple1, cumple2, cumple3);

// const materias = new Set();

// console.log(materias);

// materias.add('Matematica');
// materias.add('Español');
// console.log(typeof materias);
// console.log(materias.size);

// console.log(materias.has('Matematica'));

// materias.forEach((ola)=>{
//     console.log(ola);
// })

// // materias.clear();

// const numeros = [10,10,20,20,30,30,40,40,50,50];

// const elimina = new Set(numeros);

// console.log(elimina);


// const debiles = new WeakSet();

// const moteros = {
//     mtro1: 'Aldair',
//     mtro2: 'Luis',
//     mtro3: 'Wiliam',
// }

// debiles.add(moteros);
// console.log(debiles);

// const padres = new Map();

// padres.set('nombre','mariana');
// padres.set('Apellido','Lopez');
// console.log(padres.get('Apellido'));

// function *crearGenerador (){
//     yield 1;
//     yield 'Alvaro Lopez';
//     yield 3+3;
//     yield true;
// }

// const iterardaor = crearGenerador();

// console.log(iterardaor);
// console.log(iterardaor.next());
// console.log(iterardaor.next());
// console.log(iterardaor.next().value);

const placa = [prompt('Tu placa'),prompt('Tu placa'),prompt('Tu placa'),prompt('Tu placa'),prompt('Tu placa')];

function *generadorplacas(){

    for(let i=0; i < placa.length; i++){
        yield placa[i];
    }


}

const ola = generadorplacas();

console.log(ola.next().value);
console.log(ola.next().value);
console.log(ola.next().value);