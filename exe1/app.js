
let nome = prompt ('escreva seu nome');
let numDobra = parseInt (prompt ("informe o numero que te direi o Dobro"));



function dobra(x){
    return (x = x * 2);
    
}


function hello() {
    console.log('Ola mundo veio');
}

function exibeNome (name) {
    console.log (`Olá, ${name}!`);
}



hello();
exibeNome(nome);
console.log(dobra(numDobra));