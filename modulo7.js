// operrador de modulo.
// retorna oo resto da divisao. %
// 3 % 3 
// pegando numeros pares.

// arrays.
//
let qtd = 0;
let x = ['lu', 'be', 1, 2, 3];

while(qtd < x.length){
    console.log(x[qtd]);
    qtd++
}

//array push.
let meuArray = [1,2,3,4,5];
meuArray.push(2);

meuArray.push(function soma(x,y) {return x+y})
meuArray[5](2,5);

//for.
for(var o = 0; o <20; o++){
    console.log(o)
}


// while
let x = 0;

while (x <10){
    x % 2 == 0 ? console.log(x) : ''
    x++;
}


/*
Crie um array com 5 items (tipos variados).
*/
let novoA = [1,2,3,4,5];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(e){
    return novoA.push(e);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
function addItem(val){
    novoA.push(e);
    console.log(novoA);
}
addItem([1,2,3]);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?
console.log(novoA[2]);
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('o primeiro arry possui'+ novoA.length )

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
let numerosPares = 10;

while(numerosPares <= 20){
    numerosPares % 2 == 0 ? console.log(numerosPares) : ''
    numerosPares++
}
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// ?

console.log( 'Números ímpares entre 111 e 125:' );
// ?