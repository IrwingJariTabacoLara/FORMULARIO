document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var age = document.getElementById('age').value;
  
    if (name === '' || email === '' || age === '') {
      alert('Por favor complete todos los campos.');
      event.preventDefault();
    } else if (age < 18) {
      alert('Debe ser mayor de 18 años para registrarse en este evento.');
      event.preventDefault();
    }
    var listItem = document.createElement('li');
    listItem.textContent = `Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}`;
    datosReflejados.appendChild(listItem);
    function validarFormulario() {
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var telefono = document.getElementById('telefono').value;
        var datosReflejados = document.getElementById('datosReflejados');
    
        // Validación básica de campos vacíos
        if (nombre === '' || email === '' || telefono === '') {
            alert('Por favor, complete todos los campos.');
            return false;
        }
    
        // Expresión regular para validar el formato del email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingrese un email válido.');
            return false;
        }
    
        // Expresión regular para validar el formato del teléfono
        var telefonoRegex = /^\d{10}$/;
        if (!telefonoRegex.test(telefono)) {
            alert('Por favor, ingrese un número de teléfono válido.');
            return false;
        }
    
        // Mostrar datos reflejados
        var listItem = document.createElement('li');
        listItem.textContent = `Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}`;
        datosReflejados.appendChild(listItem);

    }
    

}
  );
  