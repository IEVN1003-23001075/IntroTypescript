

interface producto {
    desc: string,
    precio: number
}

const telefono: producto = {
    desc: "Nokia A1",
    precio: 2300
}
const tablet: producto = {
    desc: "iPad Air",
    precio: 3500
}

function calcularisv(productos: producto[]): number {
    let total = 0
    for (const producto of productos) {
        total += producto.precio
    }
    return total * 0.15
}
const articulos = [telefono, tablet]
const isv = calcularisv(articulos)
console.log("ISV:", isv)



export function calcularisv2(productos: producto[]): [number, number] {
    let total = 0
    for (const producto of productos) {
        total += producto.precio
    }
    const isv = total * 0.15
    return [total, isv]
}
const [total, isv2] = calcularisv2(articulos)
console.log("ISV2:", isv2)
console.log("Total:", total)