// Función para obtener un chiste aleatorio desde la API de Chuck Norris
function obtenerChiste() {
  const apiUrl = 'https://api.chucknorris.io/jokes/random';

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const chiste = data.value;
          const ultimaModificacion = data.updated_at;
          let categoria = data.categories[0];

          // Verificar si la categoría es "undefined"
          if (typeof categoria === 'undefined') {
            categoria = 'Sin categoría';
          }
        
          // Actualizar los elementos HTML con los detalles del chiste
          document.getElementById('chiste').innerText = chiste;
          document.getElementById('ultima-modificacion').innerText = 'Última actualización: ' + ultimaModificacion;
          document.getElementById('categoria').innerText = 'Categoría: ' + categoria;
      })
      .catch(error => console.log(error));
}

obtenerChiste();