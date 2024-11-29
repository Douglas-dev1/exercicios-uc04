/**1. Utilizando (While), construir um programa que apresente a soma dos cem primeiros números naturais (1 + 2 + 3 +...+ 98 + 99 + 100). */

let result = 0;
let i = 1;

while(i<=100){
  result+=i;
  i++;
  console.log("N°"+ i , result);
}
