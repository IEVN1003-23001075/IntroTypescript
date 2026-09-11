

export interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles,

}

interface Detalles {
    autor: string,
    anio: number,

}

const reproductor: Reproductor = {
    volumen: 30,
    segundo: 36,
    cancion: "mess",
    detalles: {
        autor: "Ed Sheeran",
        anio: 2015

    }

}


console.log("El volumne actual es:", reproductor.volumen)
console.log("El segundo actual es:", reproductor.segundo)
console.log("La cancion actual es:", reproductor.cancion)
console.log("El autor es:", reproductor.detalles.autor)
console.log("El anio es:", reproductor.detalles.anio)

const {volumen, segundo, cancion, detalles}= reproductor;
const {autor,anio} = detalles;

console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La cancion actual es: ', cancion);
console.log('El autor actual es: ', autor);
console.log('El anio actual es: ', anio);

const dbz:string[]=['Goku', 'Vegeta', 'Truncks'];
const [p1,p2,p3]= dbz;

console.log("Personaje 1: ",p1);
console.log("Personaje 2: ",p2);
console.log("Personaje 3: ",p3);

