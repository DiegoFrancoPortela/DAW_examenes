document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const contenedorChistes = document.getElementById("div-chiste");
  
    searchForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const searchTerm = searchInput.value.trim();
  
      if (searchTerm !== "") {

        // Chiste en función del valor especificado
        fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
          .then(response => response.json())
          .then(data => {
            const chistes = data.result;
  
            if (chistes.length > 0) {
              const randomJoke = chistes[Math.floor(Math.random() * chistes.length)];
  
              // Mostrar el chiste aleatorio en el contenedor
              contenedorChistes.textContent = randomJoke.value;
            } else {
              contenedorChistes.textContent = "No se encontraron chistes relacionados con la búsqueda.";
            }
          })
          .catch(error => {
            console.log("Error al realizar la búsqueda:", error);
          });
      } else {
        contenedorChistes.textContent = "Por favor, ingrese un texto para realizar la búsqueda.";
      }
    });
  });
  