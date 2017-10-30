### Pseudocodigo

##Cifrado Cesar

1. Pedir al usuario por medio de un prompt() una frase.
2. Guardar en una variable la frase.
3. Crear una función llamada cipher. 
4. Crear una función llamada decipher.
5. Obtener el numero ASCII de las letras que se nos proporcionan.
6. Convertir a la posicion de las letras del abecedario.
7. Usar la formula (x+n) % 26, en donde 
x = Posicion de la letra
n = Valor fijo = 33
26 = Número de letras del abecedario. 
9. El residuo del resultado sera la posicion de la nueva letra
8. Una vez obtenido la posicion del abecedario con la formula
debemos de convertirla a codigo ASCII para que se nos muestre la nueva letra.
9. La nueva formula seria (x-65+n) % 26 + 65 en donde 
x = numero de la letra (ASCII)
65 = es la posicion en la que se encuentra en el cogigo ASCII
Con estos dos pasos encontraremos las posiciòn en el alfabeto.
n = valor fijo = 33
26= Numero de letras del alfabeto
65= Numero que debemos de sumar pare obtener el codigo ASCII.
### NOTA:
Covertir un string a codigo ASCII:
string.charCodeAt()
Convertir una letra de codigo ASCII a string:
string.fromCharCode

