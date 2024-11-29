/*3. Utilizando (For), construir um programa que apresente todos os valores numéricos divisíveis por 4 e menores que 200.
Sugestão: a variável que controla o contador do laço deve ser iniciada com valor 1.*/


let index1 = 1;

for(index1; index1<200; index1++){
  if(!(index1%4)){
    console.log("N° Divisivel:" + index1)
  }
}

