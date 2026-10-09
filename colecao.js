let numeros = [12,32,54,54,3]
console.log(numeros[0])

let frutas = ["Maça","Pera","Uva"]

//adiciona no fim o push
frutas.push("banana")
//adiciona no inicio o unshift
frutas.unshift("mamao")
console.log(frutas)

//removendo elementos
frutas.pop()
frutas.shift()

console.log(frutas)

//repetição
frutas.forEach((fruta,index)=>{
    console.log(`${index}: ${fruta}`)
})

let misto = [42,"texto",true,{nome:"Raul"},[1,2,3]]

console.log(misto)

for(let i = 0; i<misto.length; i++){
    console.log(`$indice ${i}: ${misto[i]}`)
}

//remover indice especifico

misto.splice(1,2) 
console.log(misto)

let mapa = new Map();
mapa.set("nome","Danilo")
mapa.set(42, "Numero como chave")

mapa.get("nome")
//remover
mapa.delete(42)

mapa.forEach((valor,chave)=>{
    console.log(`${chave}: ${valor}`)

    let conjunto = new Set([1,2,3,4,5,6])
    console.log(conjunto)
    conjunto.add(6)
    conjunto.delete(3)
    conjunto.forEach(valor => console.log(valor))
})

