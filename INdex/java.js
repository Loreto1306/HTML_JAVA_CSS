let valor = 7
console.log(valor) // 7

valor = valor+1
console.log(valor)

let carros = ["Corsa","HB20","Fusca","Gol"]

for(let i = 0; i < 10; i++);{
    console.log("Seu i agora é",i );
}


for(let carro of carros){
    console.log(carro);
}


let count = 0
while(cont < 10){
    console.log("passagem"+cont)
    cont++
}


// FUNÇÃO 

function nome_da_funcao(arg1, arg2){
    return arg1 + arg2
}

console.log(nome_da_funcao(5,4))

//ALERT

function avisar(){
    alert("Isto é um alerta")
}