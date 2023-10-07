document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from data.json
    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            // Display the message in the HTML
            document.getElementById('hello-message').innerText = data.numbers;
        })
        .catch(error => console.error('Error fetching data:', error));
});
