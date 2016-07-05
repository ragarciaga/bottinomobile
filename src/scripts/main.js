$(function () {
	//Click por fuera para esconder Menú
	$("body").click(function () {
		$("#menuShow").removeClass("header-nav-list--show");
		$("#productsList").removeClass("header-nav-list-item-subnav-show");
		$("#companyList").removeClass("header-nav-list-item-subnav2-show");
	});
	//Mostrar el menú al click
	$("#buttonNav").click(function (event) {
		event.stopPropagation();
		$("#menuShow").toggleClass("header-nav-list--show");
		$("#productsList").removeClass("header-nav-list-item-subnav-show");
		$("#companyList").removeClass("header-nav-list-item-subnav2-show");
		//$('img', this).toggle(); Cambia el botón del menú al click
	});
	//Mostrar el submenú al click
	$("#productNav").click(function (event) {
		event.stopPropagation();
		$("#productsList").toggleClass("header-nav-list-item-subnav-show");
	});
	//Mostrar el submenú al click
	$("#aboutNav").click(function (event) {
		event.stopPropagation();
		$("#companyList").toggleClass("header-nav-list-item-subnav2-show");
	});
	//Realizar la busqueda y colocar cursor al click en la lupa
	$('#findBox')
	.find('form')
	.submit(function(ev) {
		ev.preventDefault();
		var search = $(this)
		.find('input[type="text"]')
		.val();
		$('.header-interaction-mobile-choice-finder-box').focus();
	})
	//No mostrar lso botones de búsqueda ni de carro de compras
	$('.product-images-item-marketcar').css({
		display: 'none'
	});
	$('.category-images-item-marketcar').css({
		display: 'none'
	});
	$('#findBox').css({
		display: 'none'
	});

	//Cambiar la disposición de las imágenes dependiendo del tamaño del dispositivo
	if($(window).width() > 550 && $(window).width() < 1200) {
		var width = $(window).width();
		$(window).resize(function() {
			if($(this).width() != width) {
				width = $(this).width();
				location.reload();
			}
		});	
	}
	//Cambiar la barra del menú con scroll dependiendo de la posición en Y
	if($(window).width() < 768) {
		$(window).scroll(function(event) {
		    var y = $(this).scrollTop();
		    if (y >= 140) {
		        $("#menuFixed").addClass('header-interaction-mobile--light');
		        $(".header-nav").addClass("fixed");
		        $("#menuButton").attr("src", "img/menu-.png");
		        $("#menuButton1").attr("src", "img/menu1-.png");
		        $("#finder").attr("src", "img/lupa-.png");
		    
		    } 
		    else {
		        $("#menuFixed").removeClass('header-interaction-mobile--light');
		        $(".header-nav").removeClass("fixed");
		        $("#menuButton").attr("src", "img/menu+.png");
		        $("#menuButton1").attr("src", "img/menu1+.png");
		        $("#finder").attr("src", "img/lupa+.png");
				}
		});
	}
	//Quitar el loader cuando es un dispositivo grande
	if($(window).width() > 768) {
		$(".content").find(".loader").remove();
	}
	//Activar el Lazy Loader
	$(function() {
    	$("img").lazyload({placeholder : "img/grey.gif", threshold : 100, effect : "fadeIn"});
	});
	//Script de Google Analytics
	// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	// 		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	// 		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	// 		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	// 		ga('create', 'UA-79744708-1', 'auto');
	// 		ga('send', 'pageview');
	//Cambiar imágenes de home al hacer hover
	$('#man-img').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('#man-img').find('source').attr('srcset', 'img/hombres.jpg');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('#man-img').find('source').attr('srcset', 'img/hombre-mobile.jpg');
	});
	$('#woman-img').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('#woman-img').find('source').attr('srcset', 'img/mujeres.jpg');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('#woman-img').find('source').attr('srcset', 'img/mujer-mobile.jpg');
	});
	$('#accesories-img').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('#accesories-img').find('source').attr('srcset', 'img/accesorios.jpg');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('#accesories-img').find('source').attr('srcset', 'img/accesorios-mobile.jpg');
	});

$('#tac01').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/tac01-1.jpg'); $('#tabletView').attr('srcset', 'img/tac01-1.jpg'); $('#mobileView').attr('src', 'img/tac01-1.jpg'); $('#desktopView2').attr('srcset', 'img/tac01-2.jpg'); $('#tabletView2').attr('srcset', 'img/tac01-2.jpg'); $('#mobileView2').attr('src', 'img/tac01-2.jpg'); $('#desktopView3').attr('srcset', 'img/tac01-3.jpg'); $('#tabletView3').attr('srcset', 'img/tac01-3.jpg'); $('#mobileView3').attr('src', 'img/tac01-3.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Tacón 400PR'); $('.product-description-paragraf').text();});
$('#tac02').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/tac02-1.jpg'); $('#tabletView').attr('srcset', 'img/tac02-1.jpg'); $('#mobileView').attr('src', 'img/tac02-1.jpg'); $('#desktopView2').attr('srcset', 'img/tac02-2.jpg'); $('#tabletView2').attr('srcset', 'img/tac02-2.jpg'); $('#mobileView2').attr('src', 'img/tac02-2.jpg'); $('#desktopView3').attr('srcset', 'img/tac02-3.jpg'); $('#tabletView3').attr('srcset', 'img/tac02-3.jpg'); $('#mobileView3').attr('src', 'img/tac02-3.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Tacón 400PR'); $('.product-description-paragraf').text('Esta es una descripción ficty');});
$('#tac03').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/tac03-1.jpg'); $('#tabletView').attr('srcset', 'img/tac03-1.jpg'); $('#mobileView').attr('src', 'img/tac03-1.jpg'); $('#desktopView2').attr('srcset', 'img/tac03-2.jpg'); $('#tabletView2').attr('srcset', 'img/tac03-2.jpg'); $('#mobileView2').attr('src', 'img/tac03-2.jpg'); $('#desktopView3').attr('srcset', 'img/tac03.jpg'); $('#tabletView3').attr('srcset', 'img/tac03.jpg'); $('#mobileView3').attr('src', 'img/tac03.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Tacón 400PR'); $('.product-description-paragraf').text('Esta es una descripción ficty de otra prueba más');});
$('#bal01').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/bal01-1.jpg'); $('#tabletView').attr('srcset', 'img/bal01-1.jpg'); $('#mobileView').attr('src', 'img/bal01-1.jpg'); $('#desktopView2').attr('srcset', 'img/bal01-2.jpg'); $('#tabletView2').attr('srcset', 'img/bal01-2.jpg'); $('#mobileView2').attr('src', 'img/bal01-2.jpg'); $('#desktopView3').attr('srcset', 'img/bal01.jpg'); $('#tabletView3').attr('srcset', 'img/bal01.jpg'); $('#mobileView3').attr('src', 'img/bal01.jpg'); $('.product-images-item-info-material').text('Material: Sintético'); $('.product-images-item-info-price').text('Baleta 400PR'); $('.product-description-paragraf').text();});
$('#bal02').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/bal02-1.jpg'); $('#tabletView').attr('srcset', 'img/bal02-1.jpg'); $('#mobileView').attr('src', 'img/bal02-1.jpg'); $('#desktopView2').attr('srcset', 'img/bal02-2.jpg'); $('#tabletView2').attr('srcset', 'img/bal02-2.jpg'); $('#mobileView2').attr('src', 'img/bal02-2.jpg'); $('#desktopView3').attr('srcset', 'img/bal02.jpg'); $('#tabletView3').attr('srcset', 'img/bal02.jpg'); $('#mobileView3').attr('src', 'img/bal02.jpg'); $('.product-images-item-info-material').text('Material: Sintético'); $('.product-images-item-info-price').text('Baleta 400PR'); $('.product-description-paragraf').text();});
$('#bota01').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/bota01-1.jpg'); $('#tabletView').attr('srcset', 'img/bota01-1.jpg'); $('#mobileView').attr('src', 'img/bota01-1.jpg'); $('#desktopView2').attr('srcset', 'img/bota01-2.jpg'); $('#tabletView2').attr('srcset', 'img/bota01-2.jpg'); $('#mobileView2').attr('src', 'img/bota01-2.jpg'); $('#desktopView3').attr('srcset', 'img/bota01.jpg'); $('#tabletView3').attr('srcset', 'img/bota01.jpg'); $('#mobileView3').attr('src', 'img/bota01.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Bota 400PR'); $('.product-description-paragraf').text();});
$('#bota02').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/bota02-1.jpg'); $('#tabletView').attr('srcset', 'img/bota02-1.jpg'); $('#mobileView').attr('src', 'img/bota02-1.jpg'); $('#desktopView2').attr('srcset', 'img/bota02-2.jpg'); $('#tabletView2').attr('srcset', 'img/bota02-2.jpg'); $('#mobileView2').attr('src', 'img/bota02-2.jpg'); $('#desktopView3').attr('srcset', 'img/bota02.jpg'); $('#tabletView3').attr('srcset', 'img/bota02.jpg'); $('#mobileView3').attr('src', 'img/bota02.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Bota 400PR'); $('.product-description-paragraf').text();});
$('#bota03').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/bota03-1.jpg'); $('#tabletView').attr('srcset', 'img/bota03-1.jpg'); $('#mobileView').attr('src', 'img/bota03-1.jpg'); $('#desktopView2').attr('srcset', 'img/bota03-2.jpg'); $('#tabletView2').attr('srcset', 'img/bota03-2.jpg'); $('#mobileView2').attr('src', 'img/bota03-2.jpg'); $('#desktopView3').attr('srcset', 'img/bota03-3.jpg'); $('#tabletView3').attr('srcset', 'img/bota03-3.jpg'); $('#mobileView3').attr('src', 'img/bota03-3.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Bota 400PR'); $('.product-description-paragraf').text('Esta es una descripción ficty');});
$('#botin01').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/botin01-1.jpg'); $('#tabletView').attr('srcset', 'img/botin01-1.jpg'); $('#mobileView').attr('src', 'img/botin01-1.jpg'); $('#desktopView2').attr('srcset', 'img/botin01-2.jpg'); $('#tabletView2').attr('srcset', 'img/botin01-2.jpg'); $('#mobileView2').attr('src', 'img/botin01-2.jpg'); $('#desktopView3').attr('srcset', 'img/botin01.jpg'); $('#tabletView3').attr('srcset', 'img/botin01.jpg'); $('#mobileView3').attr('src', 'img/botin01.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Botin 550NE'); $('.product-description-paragraf').text();});
$('#botin02').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/botin02-1.jpg'); $('#tabletView').attr('srcset', 'img/botin02-1.jpg'); $('#mobileView').attr('src', 'img/botin02-1.jpg'); $('#desktopView2').attr('srcset', 'img/botin02-2.jpg'); $('#tabletView2').attr('srcset', 'img/botin02-2.jpg'); $('#mobileView2').attr('src', 'img/botin02-2.jpg'); $('#desktopView3').attr('srcset', 'img/botin02.jpg'); $('#tabletView3').attr('srcset', 'img/botin02.jpg'); $('#mobileView3').attr('src', 'img/botin02.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Botin 550NE'); $('.product-description-paragraf').text();});
$('#botin03').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/botin03-1.jpg'); $('#tabletView').attr('srcset', 'img/botin03-1.jpg'); $('#mobileView').attr('src', 'img/botin03-1.jpg'); $('#desktopView2').attr('srcset', 'img/botin03-2.jpg'); $('#tabletView2').attr('srcset', 'img/botin03-2.jpg'); $('#mobileView2').attr('src', 'img/botin03-2.jpg'); $('#desktopView3').attr('srcset', 'img/botin03.jpg'); $('#tabletView3').attr('srcset', 'img/botin03.jpg'); $('#mobileView3').attr('src', 'img/botin03.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Botin 550NE'); $('.product-description-paragraf').text();});
$('#botin04').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/botin04-1.jpg'); $('#tabletView').attr('srcset', 'img/botin04-1.jpg'); $('#mobileView').attr('src', 'img/botin04-1.jpg'); $('#desktopView2').attr('srcset', 'img/botin04-2.jpg'); $('#tabletView2').attr('srcset', 'img/botin04-2.jpg'); $('#mobileView2').attr('src', 'img/botin04-2.jpg'); $('#desktopView3').attr('srcset', 'img/botin04.jpg'); $('#tabletView3').attr('srcset', 'img/botin04.jpg'); $('#mobileView3').attr('src', 'img/botin04.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Botin 550NE'); $('.product-description-paragraf').text();});
$('#botin05').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/botin05-1.jpg'); $('#tabletView').attr('srcset', 'img/botin05-1.jpg'); $('#mobileView').attr('src', 'img/botin05-1.jpg'); $('#desktopView2').attr('srcset', 'img/botin05-2.jpg'); $('#tabletView2').attr('srcset', 'img/botin05-2.jpg'); $('#mobileView2').attr('src', 'img/botin05-2.jpg'); $('#desktopView3').attr('srcset', 'img/botin05.jpg'); $('#tabletView3').attr('srcset', 'img/botin05.jpg'); $('#mobileView3').attr('src', 'img/botin05.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Botin 550NE'); $('.product-description-paragraf').text();});
$('#botin06').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/botin06-1.jpg'); $('#tabletView').attr('srcset', 'img/botin06-1.jpg'); $('#mobileView').attr('src', 'img/botin06-1.jpg'); $('#desktopView2').attr('srcset', 'img/botin06-2.jpg'); $('#tabletView2').attr('srcset', 'img/botin06-2.jpg'); $('#mobileView2').attr('src', 'img/botin06-2.jpg'); $('#desktopView3').attr('srcset', 'img/botin06.jpg'); $('#tabletView3').attr('srcset', 'img/botin06.jpg'); $('#mobileView3').attr('src', 'img/botin06.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Botin 550NE'); $('.product-description-paragraf').text();});
$('#botin07').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/botin07-1.jpg'); $('#tabletView').attr('srcset', 'img/botin07-1.jpg'); $('#mobileView').attr('src', 'img/botin07-1.jpg'); $('#desktopView2').attr('srcset', 'img/botin07-2.jpg'); $('#tabletView2').attr('srcset', 'img/botin07-2.jpg'); $('#mobileView2').attr('src', 'img/botin07-2.jpg'); $('#desktopView3').attr('srcset', 'img/botin07.jpg'); $('#tabletView3').attr('srcset', 'img/botin07.jpg'); $('#mobileView3').attr('src', 'img/botin07.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Botin 550NE'); $('.product-description-paragraf').text();});
$('#botin08').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/botin08-1.jpg'); $('#tabletView').attr('srcset', 'img/botin08-1.jpg'); $('#mobileView').attr('src', 'img/botin08-1.jpg'); $('#desktopView2').attr('srcset', 'img/botin08-2.jpg'); $('#tabletView2').attr('srcset', 'img/botin08-2.jpg'); $('#mobileView2').attr('src', 'img/botin08-2.jpg'); $('#desktopView3').attr('srcset', 'img/botin08.jpg'); $('#tabletView3').attr('srcset', 'img/botin08.jpg'); $('#mobileView3').attr('src', 'img/botin08.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Botin 550NE'); $('.product-description-paragraf').text();});
$('#botin09').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/botin09-1.jpg'); $('#tabletView').attr('srcset', 'img/botin09-1.jpg'); $('#mobileView').attr('src', 'img/botin09-1.jpg'); $('#desktopView2').attr('srcset', 'img/botin09-2.jpg'); $('#tabletView2').attr('srcset', 'img/botin09-2.jpg'); $('#mobileView2').attr('src', 'img/botin09-2.jpg'); $('#desktopView3').attr('srcset', 'img/botin09.jpg'); $('#tabletView3').attr('srcset', 'img/botin09.jpg'); $('#mobileView3').attr('src', 'img/botin09.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Botin 550NE'); $('.product-description-paragraf').text();});

}())