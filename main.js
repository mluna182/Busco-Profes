document.addEventListener<'DOMContentLoaded', function () {}

    // Función para redirigir a las páginas
    function redirigirA(url) {
        // Redirige a la URL proporcionada
        window.location.href = url;

}
function filtrar(categoria) {
    // Obtener todos los profesores
    const profesores = document.querySelectorAll('.profesor');
  
    // Recorrerlos y filtrar por data-categoria
    profesores.forEach(p => {
      if(categoria == 'todos') {
        p.style.display = 'block';
      } else {
        if(p.getAttribute('data-categoria') == categoria) {
          p.style.display = 'block';
        } else {
          p.style.display = 'none';
        }
      }
    });
  
  }