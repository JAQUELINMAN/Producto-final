## Pseudocódigo 

### Validación de una tarjeta

1. Preguntar al usuario por medio de un prompt() cual es el número de su tarjeta.
2. Guardarlos en una variable para convertir la cifra en arreglos.
3. Invertir el orden de los arreglos.
4. Una vez invertida la cifra, todos los numero que se encuentren en las posiciones pares se deben multiplicar por dos y si su resultado es igual o mayor a 10 se deben de sumar los dígitos de su resultado.
Ejemplo 1. Si nuestro número es 3, se debe de multiplicar por 2, 3*2 = 6, debido a que la multiplicación dio como resultado una cifra menor no se sumaran sus dígitos y solo se pondrá el resultado de la multiplicación en el lugar de 3 (lo sustituirá). 
Ejemplo 2. Si nuestro número es 8, se debe de multiplicar por 2, 6*2 = 12, debido a que el resultado de su operación fue mayor a 10 debemos de sumar sus dígitos, 1 + 0 = 0, y el resultado deberá ocupar el lugar de 6 (lo sustituirá). 
5. Una vez realizada esta instrucciones a los números pares, los números nones se deber poner junto a los nuevos dígitos y realizar una suma de todos ellos.
6. El resultado obtenido se deberá  dividir entre 10, si su residuo es 0, tu tarjeta es VALIDA; si no lo es, tu tarjeta es INVALIDA y deberás de cambiar de banco. 

![Diagrama de flujo](http://thumbs.subefotos.com/3a31ba1c720ef79532ccb500468db55eo.jpg)