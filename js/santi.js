$(function(){



	$('p').click(function(){
		var alerta = "no se puede buscar paginas que no existen";
		alert(alerta);
	});

	$('button').click(function(){
		var pagina = $('input').val();
		alert("yendo a "+pagina);
		document.location = "http://"+pagina;
	});


});
