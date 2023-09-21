randomJokeBtn.addEventListener("mouseout", function () {
    this.textContent = "Vis Tilfeldig Vits";
    this.classList.remove("font-change");
});


function klikk() {
    // Generer en unik tidslig verdi
    var timestamp = new Date().getTime();
    // Oppdater bilde
    var randomImage = document.getElementById("randomImage");
    randomImage.src = "https://loremflickr.com/320/240/paris,girl/all?" + timestamp;
}

document.getElementById("randomJokeBtn").addEventListener("click", function () {
    // Utfør en HTTP GET-request for å hente tilfeldig vits fra APIet
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            // Oppdater teksten med den tilfeldige vitsen
            document.getElementById("jokeText").textContent = data.value;
        })
        .catch(error => {
            console.error("Feil ved henting av vits:", error);
        });
});
 