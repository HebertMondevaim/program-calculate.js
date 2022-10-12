/* Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:

*/

let n1 = prompt("Digite o primeiro número!")
let n2 = prompt("Digite o segundo número!")

n1 = Number(n1)
n2 = Number(n2)

let sum = n1 + n2
let sub = n1 - n2
let mult = n1 * n2
let div = n1 * n2
let rest = n1 % n2

alert("O resultado da Soma: " + sum)
alert("O resultado da Subtração: " + sub)
alert("O resultado da Multiplicação: " + mult)
alert("O resultado da Divisão: " + div)
alert("O resto da Divisão: " + rest)

let resultFirst = sub % 2 ==0 ? 'par' : 'ímpar';
alert("A soma dos dois números é " + resultFirst + ": " + sum)

if(n1 == n2) {
  alert("Os números são iguais!")
} else {
  alert("Os números são diferentes!")
}


