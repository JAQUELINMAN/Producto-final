//Pedir al ususario el numero de su tarjeta
var numberCard = prompt ("Dame los numeros de tu tarjeta");
//Convertir el numero de la tarjeta a un arreglo
var newArrCard = numberCard.split ("");
//Invertir el arreglo
var up = newArrCard.reverse();
//

for(i in up){
	if(up % 2 === 0){
		console.log("hpl")
	}else if(up % 3 === 0){
		console.log("2")
	}
}


var isValidCard = function(newArrCard){

for (var i = 0; i<=newArrCard.length; i ++){
console.log(i);
}

}

isValidCard(newArrCard);





