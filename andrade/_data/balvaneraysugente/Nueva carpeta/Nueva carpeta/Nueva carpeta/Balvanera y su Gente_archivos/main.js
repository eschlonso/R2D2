//centrar una capa al medio
function centrarCapa(capa){
	var div = "#"+capa;
	$(div).css({
		position:'absolute',
		left: ($(window).width() - $(div).outerWidth())/2,
		top: ($(window).height() - $(div).outerHeight())/2
	});		
}

function fadeOut(capa, velocidad){
	var div = "#"+capa;
	$(div).fadeOut(velocidad);
}
function fadeIn(capa, velocidad){
	var div = "#"+capa;
	$(div).fadeIn(velocidad);
	
}
function mostrarEditorial(n){
	if(n==1){var p="none"; t="block";}else{ var p="block"; t="none";}
	document.getElementById('parrafoE').style.display=p;
	document.getElementById('textoE').style.display=t;
}

function mostrarCapa(capa){
	document.getElementById(capa).style.display="block";
}
function ocultarCapa(capa){
	document.getElementById(capa).style.display="none";
}
