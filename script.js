// Login Function
function checkLogin() {
    var username = document.getElementById("username").value;
    var errorMessage = document.getElementById("error-message");

    var allowedNames = ["Audie", "Valentine", "LoveYou", "171224"];

    if (allowedNames.includes(username)) {
        window.location.href = "main.html";
    } else {
        errorMessage.textContent = "Nama atau password salah!";
        errorMessage.style.color = "red";
    }
}

// Toggle Music Function
function toggleMusic() {
    var music = document.getElementById("background-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}