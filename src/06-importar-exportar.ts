import { type producto, calcularisv2 } from "./05-destructuracion-funciones"

const carrito: producto[] = [
    {
        desc: "telefono 1",
        precio: 1000
    },
    {
        desc: "telefono 2",
        precio: 2000
    },
    {
        desc: "telefono 3",
        precio: 3000
    }
]

const [total, isv] = calcularisv2(carrito)

console.log("Total carrito: ", total)

console.log("ISV carrito: ", isv)