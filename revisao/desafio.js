const leia = require("prompt-sync")()
//sempre que o usuário for digitar usar o npm i prompt-sync 

/**let valor1
let valor2
let resultado

valor1 = parseInt (leia("Digite o primeiro número: "))
valor2 = parseInt (leia("Digite o segundo número: "))
console.log("A soma dos números é: " +(valor1+valor2))*/

/**let numero
numero = parseInt(leia("Digite um número: "))

console.log("Raiz quadrada: " +(Math.sqrt(numero)))
console.log("Número ao cubo: " +(Math.pow(numero,3)))*/

/**let A
let B 
let C 
let R
let S
let D 

A = parseInt(leia("Digite o valor de A: "))
B = parseInt(leia("Digite o valor de B: "))
C = parseInt(leia("Digite o valor de C: "))

R = Math.pow((A+B),2)
S = Math.pow((B+C),2)

D = (R+S)/2

console.log("O resultado é: " +D)*/

/**let x1
let x2
let y1
let y2
let D 

x1 = parseInt(leia("Digite o valor de x1: "))
x2 = parseInt(leia("Digite o valor de x2: "))
y1 = parseInt(leia("Digite o valor de y1: "))
y2 = parseInt(leia("Digite o valor de y2: "))

D = Math.sqrt(Math.pow((x2-x1),2) +Math.pow((y2-y1),2))

console.log("Resultado: " +D)*/

let aluno = leia("Digite o nome do aluno: ")
let nota = parseInt(leia("Digite sua nota: "))
let tipo = leia("Digite (a) para aluna, (o) para aluno e (e) para alune: ")

if(tipo == "o"){
    if(nota <= 5){
        console.log("Olá aluno " +aluno+ ", você não passou, está de recuperação.")
    }
    else{
        console.log("Parabéns, aluno!!!" +aluno+ ", você passou de ano, curta as férias.")
    }
}
if(tipo == "a"){
    if(nota <= 5){
        console.log("Olá aluna " +aluno+ ", você não passou, está de recuperação.")
    }
    else{
        console.log("Parabéns, aluna!!! " +aluno+ ", você passou de ano, curta as férias.")
    }
}
if(tipo == "e"){
    if(nota <= 5){
        console.log("Olá alune " +aluno+ ", você não passou, está de recuperação.")
    }
    else{
        console.log("Parabéns, alune!!! " +aluno+ ", você passou de ano, curta as férias.")
    }
}
