/*
IF testa se o valor é bool.
trusty, falsy

if(1) {teste = true} else{ teste = false}
//1 = trusty
//[] = trusty
//{} = trusty
if(0) {teste = true} else {teste = false}
// 0    falsy
// null falsy
// NaN  falsy  
// 0    falsy
// -0   falsy
// ""   falsy
// false falsy
*/ 

//Descobrir sem utilizar IF.
/* com duas !! ele converte e reconverte pro valor original, mas retornando se é true ou false.
!!1 true
!!0 falsy
!!null falsy
!!0 falsy
!![] falsy
!!{}falsy
*/


/*Condicional ternario
condicao ? true : false

//retorna false.
1 == 2 ? true : false

*/


/*
escopo de variaveis
global, local.

function = cria um escopo local, ou seja toda variavel dentro de function está dentro da function e nao acessa ela fora.
ao contrario = acessa de qualquer local.

var myvar = 1 // pode ser acessada de qualquer lugar.

function vare (){
    var test
}
console.log(test) // nao funciona, pq test não é global.


*/


/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(a){
    
}
isTruthy(1) == true ? true : false

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
?
isTruthy(0, -0, null, NaN, "") 
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
?
isTruthy(1,2,3,4,5,6,7,8,9,10)
/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
 marcA: 'oi',
 modelo: 'gol',
 placa: 'gcs12',
 ano: 1996,
 cor: preta,
 quantasPortas: 4,
 assentos: 4,
 quantidadePessoas: 0
}


/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor){
    return carro.cor = cor
}
carro.mudarCor('preto');

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo =  function() {
    return carro.modelo
}


/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function (){
    return carro.marcA
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
?

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
?

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
?

Mude a cor do carro para vermelho.
?

// E agora, qual a cor do carro?
?

// Mude a cor do carro para verde musgo.
?

// E agora, qual a cor do carro?
?

// Qual a marca e modelo do carro?
?

// Adicione 2 pessoas no carro.
?

// Adicione mais 4 pessoas no carro.
?

// Faça o carro encher.
?

// Tire 4 pessoas do carro.
?

// Adicione 10 pessoas no carro.
?

// Quantas pessoas temos no carro?
?