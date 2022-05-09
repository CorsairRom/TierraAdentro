$().ready(function() {
	$("#formcontac").validate({
		rules: {
			name: { required:true, minlength: 3 ,maxlength: 50 },
			email: { required:true, email: true},
			titulo: { required: true, minlength: 2 },
			message: { required:true, minlength: 2, maxlength: 500 }
		},
		messages: {
			name: "El campo no puede estar vacio.",
			email : "El campo no puede estar vacio.",
			titulo : "El campo no puede estar vacio.",
			message : "El campo no puede estar vacio"
		}
	});
});



$("#guardar").click(function() {
	if($("#formcontac").valid() == false){
        return;
    }
    let name = $("#name").val()
    let email = $("#email").val()
    let titulo = $("#titulo").val()
    let message = $("#message").val()

});


