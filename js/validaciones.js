
function checkRut(rut) {
    // Obtiene el valor ingresado quitando puntos y guión.
    var valor = clean(rut.value);
  
    // Divide el valor ingresado en dígito verificador y resto del RUT.
    cuerpo = valor.slice(0, -1);
    dv = valor.slice(-1).toUpperCase();
  
    // Separa con un Guión el cuerpo del dígito verificador.
    rut.value = format(rut.value);
  
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if (cuerpo.length < 7) {
      return false;
    }
  
    // Calcular Dígito Verificador "Método del Módulo 11"
    suma = 0;
    multiplo = 2;
  
    // Para cada dígito del Cuerpo
    for (i = 1; i <= cuerpo.length; i++) {
      // Obtener su Producto con el Múltiplo Correspondiente
      index = multiplo * valor.charAt(cuerpo.length - i);
  
      // Sumar al Contador General
      suma = suma + index;
  
      // Consolidar Múltiplo dentro del rango [2,7]
      if (multiplo < 7) {
        multiplo = multiplo + 1;
      } else {
        multiplo = 2;
      }
    }
  
    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
  
    // Casos Especiales (0 y K)
    dv = dv == "K" ? 10 : dv;
    dv = dv == 0 ? 11 : dv;
  
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if (dvEsperado != dv) {
      return false;
    } else {
      return true;
    }
  }
  function format (rut) {
    rut = clean(rut)
  
    var result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1)
    for (var i = 4; i < rut.length; i += 3) {
      result = rut.slice(-3 - i, -i) + '.' + result
    }
  
    return result
  }
  
  function clean (rut) {
    return typeof rut === 'string'
      ? rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase()
      : ''
  }
  








$(document).ready(function() {
    jQuery.validator.addMethod("emailcheck", function(value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
      }, 'Incorrecto.');

      jQuery.validator.addMethod("numbercheck", function(value, element) {
        // allow any non-whitespace characters as the host part
            return this.optional( element ) || /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/.test( value );
        }, 'incorrecto');
      jQuery.validator.addMethod("rutcheck", function() {
        // allow any non-whitespace characters as the host part
            if (checkRut(rut) ) {
                return true;
            } else {
                return false;
            }
        }, 'Rut Incorrecto');
      
        
$("#formulario").validate({

        rules: {
        PrimerNombre: { required: true, minlength: 4},
        SegundoNombre: { required: true, minlength: 4},
        PrimerApellido: { required: true, minlength: 4},
        SegundoApellido: { required: true, minlength: 4},
        usuario: { required: true, minlength: 4},
        pass: { required: true, minlength: 4},
        direccion: { required: true, minlength: 4},
        edad: { required: true, number:true, min: 18},
        genero: { required: true},
        rut:{required:true, rutcheck: true},
        email: { required:true, emailcheck:true},
        numeroTelefono: { minlength: 2, maxlength: 15, required:true, numbercheck:true}

        },
        messages: {
        PrimerNombre: "El campo es obligatorio.",
        SegundoNombre: "El campo es obligatorio.",
        PrimerApellido: "El campo es obligatorio.",
        SegundoApellido: "El campo es obligatorio.",
        usuario: "El campo es obligatorio.",
        pass: "El campo es obligatorio.",
        direccion: "El campo es obligatorio.",
        edad: "El campo es obligatorio.",
        genero: "Ingrese un genero.",
        email : "El campo es obligatorio y debe tener formato de email correcto.",
        numeroTelefono : "El campo Teléfono no contiene un formato correcto.",
        maxlength: "el largo maximo es 15"
        
        }
    });
});


