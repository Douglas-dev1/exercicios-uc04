/*2. Utilizando (DoWhile), elaborar um programa que apresente o somatório dos valores pares existentes na faixa de 1 até 500.*/

let soma = 0;
let index = 0;

do{

if(!(index%2)){
  soma+=index
  console.log("N°"+ index , soma);
  index++;
}
else
  index++;
}
while(index<=500)
