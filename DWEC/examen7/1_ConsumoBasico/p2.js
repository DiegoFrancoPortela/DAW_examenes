document.addEventListener("DOMContentLoaded", function() {
    // Lista de Categorías
    fetch("https://api.chucknorris.io/jokes/categories")
      .then(response => response.json())
      .then(categorias => {
        const listaCategorias = document.getElementById("categories-list");
  
        // Crear un elemento nuevo por cada categóría
        categorias.forEach(categoria => {
          const listarCategoria = document.createElement("li");
          const link = document.createElement("a");
          link.href = "#";
          link.textContent = categoria;
  
          link.addEventListener("click", function() {
            // Obtener un chiste aleatorio de la categoría seleccionada
            fetch(`https://api.chucknorris.io/jokes/random?categoria=${categoria}`)
              .then(response => response.json())
              .then(chiste => {
                
                // Mostrar chiste
                const divChiste = document.createElement("p");
                divChiste.textContent = chiste.value;
  
                // ELiminar chiste y generar nuevo
                const existingJokes = document.querySelectorAll("p");
                existingJokes.forEach(chiste => chiste.remove());
  
                listarCategoria.appendChild(divChiste);
              })
              .catch(error => {
                console.log("Error al obtener el chiste:", error);
              });
          });
  
          listarCategoria.appendChild(link);
          listaCategorias.appendChild(listarCategoria);
        });
      })
      .catch(error => {
        console.log("Error al obtener las categorías:", error);
      });
  });
  