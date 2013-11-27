$(function(){

	var puntos = 0;

	$("#aceptar").click(function(){
		var respuesta = $('input[name=res]:checked').val();
		if( respuesta == undefined ) {
			alert("Elige una respuesta primero");
		} else {
			$('input[name=res]').prop('disabled', true);
			$('#aceptar').prop('disabled', true);
			if( respuesta == 9 ) {
				alert("bien");
				puntos = puntos + 1;
				$('#puntos').text(puntos);
			} else {
				alert("mal");
			}
		}

	});

	$("#aceptar2").click(function(){
		var respuesta = $('input[name=res2]:checked').val();
		if( respuesta == undefined ) {
			alert("Elige una respuesta primero");
		} else {
			$('input[name=res2]').prop('disabled', true);
			$('#aceptar2').prop('disabled', true);
			if( respuesta == 864 ) {

				alert("bien");
				puntos = puntos + 1;
				$('#puntos').text(puntos);
			} else {
				alert("mal");
			}
		}
	});

$("#aceptar3").click(function(){
		var respuesta = $('input[name=res3]:checked').val();
		if( respuesta == undefined ) {
			alert("Elige una respuesta primero");
		} else {
				$('input[name=res3]').prop('disabled', true);
				$('#aceptar3').prop('disabled', true);
			if( respuesta == 20 ) {
				alert("bien");
				puntos = puntos + 1;
				$('#puntos').text(puntos);
			} else {
				alert("mal");
			}
		}
	});



$("#aceptar4").click(function(){
		var respuesta = $('input[name=res4]:checked').val();
		if( respuesta == undefined ) {
			alert("Elige una respuesta primero");
		} else {
				$('input[name=res4]').prop('disabled', true);
				$('#aceptar4').prop('disabled', true);
			if( respuesta == 4 ) {
				alert("bien");
				puntos = puntos + 1;
				$('#puntos').text(puntos);
			} else {
				alert("mal");
			}
		}

	});






$("#aceptar5").click(function(){
		var respuesta = $('input[name=res5]:checked').val();
		if( respuesta == undefined ) {
			alert("Elige una respuesta primero");
		} else {
				$('input[name=res5]').prop('disabled', true);
				$('#aceptar5').prop('disabled', true);
			if( respuesta == 1.134 ) {
				alert("bien");
				puntos = puntos + 1;
				$('#puntos').text(puntos);
			} else {
				alert("mal");
			}
		}

	});


$("#aceptar6").click(function(){
		var respuesta = $('input[name=res6]:checked').val();
		if( respuesta == undefined ) {
			alert("Elige una respuesta primero");
		} else {
				$('input[name=res6]').prop('disabled', true);
				$('#aceptar6').prop('disabled', true);
			if( respuesta == "fuego" ) {
				alert("bien");
				puntos = puntos + 1;
				$('#puntos').text(puntos);
			} else {
				alert("mal");
			}
		}

	});




$("#aceptar7").click(function(){
		var respuesta = $('input[name=res7]:checked').val();
		if( respuesta == undefined ) {
			alert("Elige una respuesta primero");
		} else {
				$('input[name=res7]').prop('disabled', true);
				$('#aceptar7').prop('disabled', true);
			if( respuesta == "planta" ) {
				alert("bien");
				puntos = puntos + 1;
				$('#puntos').text(puntos);
			} else {
				alert("mal");
			}
		}

	});




$("#aceptar8").click(function(){
		var respuesta = $('input[name=res8]:checked').val();
		if( respuesta == undefined ) {
			alert("Elige una respuesta primero");
		} else {
				$('input[name=res8]').prop('disabled', true);
				$('#aceptar8').prop('disabled', true);
			if( respuesta == "planta" ) {
				alert("bien");
				puntos = puntos + 1;
				$('#puntos').text(puntos);
			} else {
				alert("mal");
			}
		}

	});







$("#aceptar9").click(function(){
		var respuesta = $('input[name=res9]:checked').val();
		if( respuesta == undefined ) {
			alert("Elige una respuesta primero");
		} else {
				$('input[name=res9]').prop('disabled', true);
				$('#aceptar9').prop('disabled', true);
			if( respuesta == "agua" ) {
				alert("bien");
				puntos = puntos + 1;
				$('#puntos').text(puntos);
			} else {
				alert("mal");
			}
		}

	});










});







































































































































































































































