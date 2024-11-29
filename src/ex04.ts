/**4. Elaborar um programa que apresente os resultados das potências do valor de base 3, elevado a um expoente que varia do valor 0 até o valor 15. O programa deve apresentar os valores 1, 3, 9. 27, ..., 14.348.907.
 * Sugestão: leve em consideração as definições matemáticas do cálculo de potência, em que qualquer valor numérico diferente de zero elevado a zero é 1, e todo valor numérico elevado a 1 é ele próprio.
 * Não use o operador aritmético de exponenciação “Math.pow” e resolva o problema com a técnica de laço a sua escolha. */

let base: number = 3;
let expoente = 0;
let result1: number = 1;

for(expoente; expoente<=15; expoente++){
  console.log("A potencia de " + expoente + " é = " + result1);
  result1*=base;
}
