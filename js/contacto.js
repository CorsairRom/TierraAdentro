

$(document).ready(function() {
	$("#contact-form").validate({
		rules: {
			name: { required: true, minlength: 3 ,maxlength: 50 },
			email: { required:true, email: true},
			titulo: { required: true, minlength: 2 },
			message: { required:true, minlength: 2, maxlength: 500 }
		},
		messages: {
			name: "El campo es obligatorio.",
			email : "El campo es obligatorio y debe tener formato de email correcto.",
			titulo : "El campo es obligatorio.",
			message : "El campo Mensaje es obligatorio"
		}
	});
	$( "#submit" ).click(function() {
		if ($("#contact-form").validate().form()) {
			alert('Mensaje enviado')
			
		}
		
	});
	

});






