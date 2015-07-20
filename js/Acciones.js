var menuresponsive = 1; 
var largo = jQuery(window).width();

function MenuResponsive(){
	if (menuresponsive === 1) {
		AbrirMenu();
		console.log("Menú móvil abierto");
	}
	else if (menuresponsive === 0) {
		CerrarMenu();
		console.log("Menú móvil cerrado");
	}
}
function AbrirMenu(){
	if (largo < 680) {
		$("#navegacion").css("display", "block");
		menuresponsive = 0;
	}
}
function CerrarMenu(){
	if (largo < 680) {
		$("#navegacion").css("display", "none");
		menuresponsive = 1;
	}
}

function Home() {
	//setTimeout (location.href="index.php", 1);
	CerrarMenu();
	url = "home";
	CargarPaginaSeccion();
};
function Club() {
    //setTimeout (location.href="index.php?pagina=club", 1);
    CerrarMenu();
	url = "club";
	CargarPaginaSeccion();
   $(".cover").load("Imagenes/BA.png");  
};
function Tutoriales() {
    //setTimeout (location.href="index.php?pagina=proyectos", 1);
    CerrarMenu();
    url = "tutoriales";
	CargarPaginaSeccion();
};
function Proyectos() {
    //setTimeout (location.href="index.php?pagina=proyectos", 1);
    CerrarMenu();
    url = "proyectos";
	CargarPaginaSeccion();
};
function Galeria() {
    //setTimeout (location.href="index.php?pagina=galeria", 1);
    CerrarMenu();
    url = "galeria";
	CargarPaginaSeccion();
};
function Contacto() {
    //setTimeout (location.href="index.php?pagina=contacto", 1);
    CerrarMenu();
    url = "contacto";
	CargarPaginaSeccion();
};


function HaciaArriba() {
	$('html, body').animate({scrollTop:0}, 500);
}

var imagen;

function Galeria_AbrirVistaPrevia(imagen){
	$("#imagen-ampliada").remove();
	$( "<div id='imagen-ampliada' style='margin: 10px; height: 90%; margin: 10px; background-image: url(img/Galeria-" + imagen + ".jpg); background-size: contain; background-repeat: no-repeat; background-position: center;'></div>" ).prependTo( "#cuadro-blanco" );
	//$('p#progreso-porcentaje').html('<div class="imagen-foto" style="background-image: url(img/galeria-' + imagen +'.png);"></div><div class="imagen-texto">Foto 1</div>');
	$("#vista-previa").fadeIn();
	//$("#vista-previa").show(); 
	$("body").css("overflow", "hidden");
}
function Galeria_CerrarVistaPrevia(){
	$("#vista-previa").fadeOut();
	//$("#vista-previa").hide(); 
	$("body").css("overflow", "inherit");
}