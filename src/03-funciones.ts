function sumar (a:number, b:number): number {
    let res:number =a+b
    //console.log(res)
    return res
}

const resultado = sumar (3,5)

console.log(resultado)

function multiplicar (n1:number=2, base?:number, n2:number=4): number{
    return n1*n2*base;
}

console.log(multiplicar())
console.log(multiplicar(3))
console.log(multiplicar(3,2))

interface Mascotas {
    nombre: string,
    edad: number,
    raza: string,
    sexo?: string,
    vacunado: boolean,
    mostrarEdad:()=>void

}

function mostrarmascota (mascota:Mascotas, x:number): void{
    mascota.edad+=x;
    console.log(mascota)
    console.log(mascota.mostrarEdad)
}

const nuevamascota:Mascotas={
    nombre: 'sirulais',
    edad: 5,
    raza: 'pastor aleman',
    vacunado: true,
    mostrarEdad (){
        console.log('la edad de $(this.number) es $(this.edad)')
    }
}

mostrarmascota(nuevaMascota,3)