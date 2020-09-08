var matrixFocus = [];
var aux = [];


function start(){
	determineEven();
}

function determineEven() {
	var str = document.getElementById("sizeMatrix").value;
	var sizeMatrix = parseInt(str);
	
	if(sizeMatrix % 2 === 0){
		determineSize(sizeMatrix);
	} else {
		alert("Ingrese un número par");
	}
		
}

function determineSize(sizeMatrix){
	if(sizeMatrix >10){
		alert("El tamaño máximo es 10");
	} else {
		createMatix(sizeMatrix);
	}
}

function createMatix(sizeMatrix){
	
	
	for(var i=0; i<sizeMatrix; i++){
		matrixFocus[i] = [];
		var elementColumn = document.createElement("div");
		elementColumn.id = "div"+i;
		elementColumn.className="column";
		document.getElementById("matrixContainer").appendChild(elementColumn);
		
		for(var j=0; j<sizeMatrix; j++){
			
			var element = document.createElement('div');
			element.className = "box";
			element.id ='div'+i+''+j;
			
			element.setAttribute("x",i);
			element.setAttribute("y",j);
			
			
			matrixFocus[i][j] = 0;
			document.getElementById("div"+i).appendChild(element);
		}
	}
	console.log(sizeMatrix);
	fillMatrixWithZero(matrixFocus, sizeMatrix);
	
}

function fillMatrixWithZero(matrixFocus, sizeMatrix) {
	
	for(var i=0; i<sizeMatrix; i++){
		for(var j=0; j<sizeMatrix; j++){
			matrixFocus[i][j] = 0;
		}
	}
	console.log("matrix filled with zero");
	createArr(matrixFocus, sizeMatrix);
}

function createArr(matrixFocus, sizeMatrix){
	
	var arr = [];
	var aux = 1;
	for( var i = 0; i < sizeMatrix*sizeMatrix; i++){
		arr[i] = aux;
		if((i+1)%2===0){
			aux = aux+1;
		}
		console.log(arr[i]);
	}
	console.log("Arr created");
	fillMatrix(matrixFocus, sizeMatrix, arr);
}
	

function fillMatrix(matrixFocus, sizeMatrix, arr){
	var a = 0;
	for(var i=0; i<sizeMatrix; i++){
		for(var j=0; j<sizeMatrix; j++){
			while(matrixFocus[i][j] == 0) {
				a = Math.floor(Math.random() * (sizeMatrix*sizeMatrix));
				console.log(arr[a]);
				if(arr[a]!=0){
					matrixFocus[i][j] = arr[a];
					arr[a] = 0;
				}
			}
		}
	}
	console.log("finished");
}

function printMatrix(matrixFocus, sizeMatrix) {
	for(var i=0; i<sizeMatrix; i++){
		for(var j=0; j<sizeMatrix; j++){
			console.log(matrixFocus[z][i]);
		}
	}
}


function hide(){
	$(document).on('click', '.box', function () {
		$(this).removeClass("box");
		$(this).addClass("none");
	});
}


$(document).on('click', '.box', function () {
		$(this).last().html(matrixFocus[$(this).attr("x")][$(this).attr("y")]);
		if(aux[0] == null){
			aux[0] = $(this).attr("id");
			console.log("is NOT Null");
		}else if(aux[1] == null) {
			aux[1] = $(this).attr("id");
			
			if(matrixFocus[$("#"+aux[0]).attr("x")][$("#"+aux[0]).attr("y")] == matrixFocus[$("#"+aux[1]).attr("x")][$("#"+aux[1]).attr("y")] ){
				
				if(aux[0] !== aux[1]){
					$("#"+aux[0]).removeClass("box");
					$("#"+aux[0]).addClass("none");
					
					$("#"+aux[1]).removeClass("box");
					$("#"+aux[1]).addClass("none");
					
				}
				
			}
			
		} else {
			$("#"+aux[0]).last().html(null);
			$("#"+aux[1]).last().html(null);
			
			aux[0] = $(this).attr("id");
			aux[1] = null;
			console.log("isNull");
		}
});
function divClicked(divClicked) {
	
}


