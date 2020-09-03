var cl=1;

function cambio1(){
	$("#pag1").toggle();
	$("#pag2").toggle();
	$("#anterior").toggle();
}

function cambio2(){
	$("#pag2").toggle();
	$("#pag3").toggle();
	$("#siguiente").toggle();
}


$("#siguiente").click(function(){
	if (cl==1) {
		cambio1();
	}if (cl==2) {
		cambio2();
	}
	cl++;
});

$("#anterior").click(function(){
	if (cl==2) {
		cambio1();
	}if (cl==3) {
		cambio2();
	}
	cl--;
});



