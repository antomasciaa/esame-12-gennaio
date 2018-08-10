var getArea = function area(lati){
	if(lati == null){
		console.log("Error: null input");
		return -1;
	} if(!(lati instanceof Array)){
		console.log("Error: input is not an array");
		return -1;
	} if(lati.lenght != 2){
		console.log("Error: input array has size " + lat.length + " instead of 2");
		return -1;
	} if(!Number.isInteger(lat[0]) || !Number.isInteger(lat[1])){
		console.log("Error: input value needs to be integers");
		return -1;
	} if(lat[0] >= 0 && lat[1] >= 0){
		var prodotto = lat[0]*lat[1];
		return prodotto;
  	} else {
		console.log("Error: input value needs to be positive");
		return -1;
  	}
}

module.exports = getArea;