function loadAbout() {
    // Fetch the HTML file content
    fetch('about.html')
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Return the HTML content as text
        return response.text();
    })
    .then(htmlContent => {
        // Set the innerHTML of the container div to the loaded HTML content
        document.getElementById('right').innerHTML = htmlContent;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    })}

    function loadWork() {
        // Fetch the HTML file content
        fetch('work.html')
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Return the HTML content as text
            return response.text();
        })
        .then(htmlContent => {
            // Set the innerHTML of the container div to the loaded HTML content
            document.getElementById('right').innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        })}

        function loadContact() {
            // Fetch the HTML file content
            fetch('contact.html')
            .then(response => {
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Return the HTML content as text
                return response.text();
            })
            .then(htmlContent => {
                // Set the innerHTML of the container div to the loaded HTML content
                document.getElementById('right').innerHTML = htmlContent;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            })}
document.addEventListener("DOMContentLoaded", function() {
const image = document.querySelector(".image");
image.addEventListener("click", function() {
image.classList.toggle("fullscreen");
        });
});