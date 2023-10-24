document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos la palabra clave de la URL (por ejemplo, ?q=matemáticas)
    const urlParams = new URLSearchParams(window.location.search);
    const keyword = urlParams.get('q');

    // Realizar una búsqueda ficticia (esto es solo un ejemplo)
    const resultados = buscarProfesores(keyword);

    // Mostrar los resultados en la página
    const resultadosContainer = document.getElementById('resultados');
    
    resultados.forEach(profesor => {
        const profesorElement = document.createElement('div');
        profesorElement.classList.add('profesor');

        // Crea elementos para mostrar información del profesor
        const imagen = document.createElement('img');
        imagen.src = profesor.imagen;
        imagen.alt = profesor.nombre;

        const nombre = document.createElement('h3');
        nombre.textContent = profesor.nombre;

        const especialidad = document.createElement('p');
        especialidad.textContent = profesor.especialidad;

        const verPerfilButton = document.createElement('button');
        verPerfilButton.textContent = 'Ver Perfil';

        profesorElement.appendChild(imagen);
        profesorElement.appendChild(nombre);
        profesorElement.appendChild(especialidad);
        profesorElement.appendChild(verPerfilButton);

        resultadosContainer.appendChild(profesorElement);
    });
});

// Función ficticia para buscar profesores (reemplaza con tu lógica real)
function buscarProfesores(keyword) {
    // Aquí simularías una búsqueda en tu base de datos o fuente de datos
    // y devolverías un arreglo de resultados de profesores
    return [
        { nombre: 'Profesor 1', especialidad: 'Especialidad 1', imagen: 'imagen1.jpg' },
        { nombre: 'Profesor 2', especialidad: 'Especialidad 2', imagen: 'imagen2.jpg' },
        // Agrega más resultados aquí
    ];
}
