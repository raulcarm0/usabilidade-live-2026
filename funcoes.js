// node funcoes.js
// function ola(){
//     console.log("Olá mundo")
// }

// ola()

// // o simbolo a seguir ` é uma crase
// function saudacao(nome){
//     return `, ${nome}`
// }

// console.log(saudacao("Raul"))

// const soma = function(a,b){
//     return a+b
// }

// console.log(soma(3,4))

// function numero(numero){
//  return numero
// }

// numero(soma(2,3))

//função anonima
// const multiplicar = (a,b) => a*b

// console.log(multiplicar(2,7))

// const objeto = {
//     nome: "Danilo",
//     altura: 1.80,
//     mostrar: () => console.log(this.nome)
// }

// objeto.mostrar(
// )

function cumprimentar(nome = "Visitante"){
    return `bem vindo ${nome}`
}

console.log(cumprimentar())
console.log(cumprimentar("Danilo"))


//funcao IIFE que é executada no mesmo instante que criada
(function(){
    console.log("Funcao autoexec")
})();

function processar(valor, callback){
    console.log("Processando...")
    callback(valor)
}

processar(10,(num)=> console.log(`Resutado: ${num*2}`)
)

//função assicrona

async function  obterDados() {
    return "Dados recebidos"
    
}