/*switch

//let opcao = 3;
/*
let opcao = parseInt(prompt("Digite uma opção"))

//é possível usar tambem    let opcao =+ prompt("Digite uma opção") para converão de para número.

//case é preenchido com número
switch(opcao){

    case 1:
        document.write("Primeira Opção")
        break;
    case 2:
        document.write("Segunda Opção")
        break;
    case 3:
        document.write("Terceira Opção")
        break;
    default:
        document.write("Nenhuma das opções são válidas")
        break;
}
*/
/*
let valor = 7
console.log(valor);
valor = --valor
console.log(valor);

let valor1 = 10
console.log(valor1);
valor1 *= 3
console.log(valor1)

let valor2 = 15
console.log(valor2);
valor2 += 75
console.log(valor2)

// for (laço de repetição)

//for(let i =1; i < 10; i++){
    //console.log("Agora i vale" +i);


// for com Array
let carros = ["belina","fusca","Marea Turbo","Kombi","gurgel"]

//for(let i = 0; i < carros.lenght; i++){
    //console.log(carros[i]);


for (let carro of carros){
    console.log(carro)
}

//while

/*let cont=0
while(cont <20){
    alert("Passagem de numeros")
    cont++

}

let valor3=0
do{
    console.log("passagem " + valor3)
    valor2++
}while( valor2 == 0)

//fun

function funcao(num1, num2){
    return num1-num2
}
console.log(funcao(4,6))

function avisar(){
    alert("Aviso 1")
    alert("Aviso 2")
}
/*
*/

let novo = document.getElementById("IdNome")

function mudar(){
    
document.getElementById("TITULO").innerHTML =novo.value;
}

function trocar(cores){
    document.body.style.background =cores
}