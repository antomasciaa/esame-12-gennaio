var getArea = function area(lati){
	if(lati == null){
		console.log("Error: null input");
		return -1;
	} if(!(lati instanceof Array)){
		console.log("Error: input is not an array");
		return -1;
	} if(!Number.isInteger(lati[0]) || !Number.isInteger(lati[1])){
		console.log("Error: input value needs to be integers");
		return -1;
	} if(lati[0] >= 0 && lati[1] >= 0){
		var prodotto = lati[0]*lati[1];
		return prodotto;
  	} else {
		console.log("Error: input value needs to be positive");
		return -1;
  	}
}

module.exports = getArea;