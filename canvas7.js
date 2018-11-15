function iniciar(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	
	var imagen=new Image();
	imagen.src="https://mega.nz/#!XSR2GKiL!Ou11HJbYL9l0hlEyDemSwFnKXwJfxhUTS4Brp6PYkEk";
	imagen.addEventListener("load", function(){
		lienzo.drawImage(imagen,0,0,elemento.width,elemento.height)},false);	
	}
window.addEventListener("load", iniciar, false);
