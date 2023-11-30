document.addEventListener('DOMContentLoaded',function() {
    var saludoElement =
    document.getElementById('Saludo');
    var horaActual = new
    Date().getHours();
    

    if ( horaActual >= 5 && horaActual < 12) {
        saludoElement.textContent = '¡Buenos días!';
    } else if (horaActual >= 12 && horaActual < 18) {
        saludoElement.textContent = '¡Buenas tardes!';
    } else {
        saludoElement.textContent = '¡Buenas noches!';
    }
  
});