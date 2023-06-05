function searchImages() {
    var query = document.getElementById('searchInput').value;
    var count = document.getElementById('imageCount').value;
    var apiUrl = 'https://api.unsplash.com/search/photos?query=' + query + '&per_page=' + count + '&client_id=zSKrRFy108rx-b72Pp2uEWrtxliihMu0iEbhgvLhww8';

    // Realiza una petición GET a la API de Unsplash
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Procesa los resultados de la búsqueda
            displayResults(data.results);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function displayResults(results) {
    var resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    results.forEach(function (result) {
        
        // Abrir imagen original 
        var imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';

        var imageElement = document.createElement('img');
        imageElement.src = result.urls.thumb;

        imageLink.appendChild(imageElement);
        resultsContainer.appendChild(imageLink);
    });
}