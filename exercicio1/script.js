const num = Number(prompt("Insira um numero:"))

if (num % 2 === 0) {
    if (num % 3 === 0) {
        console.log("Seu numero é divisivel por 2 ou por 3")
    } else {
        console.log("Não foi possivel dividir o numero")
    }
}else{
    console.log("Não foi possivel dividir o numero")
}

if(num % 2 === 0 || num % 3 === 0){
    console.log("Esse numero é divisivel")
}else{
    console.log("Esse numero não é divisivel")
}