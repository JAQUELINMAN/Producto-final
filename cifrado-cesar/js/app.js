var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var sentence = prompt ("Dime una frase");
var newArrSentence = sentence.split("") 
	sentence = sentence.toUpperCase();
	console.log (newArrSentence);


var cipher = function (index){

for (var i = 0; i <= sentence.length; i++){
	if(newArrSentence[i] % 26) {
console.log("yes");
}
}
}
cipher(sentence);
