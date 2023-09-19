var button = document.getElementById('meu-botao');
var imageContainer = document.getElementById("imageContainer");
var audio = document.getElementById('audio');

button.addEventListener("click", () => {
    audio.play();
    button.style.zIndex = 0;
    setTimeout(() => {
        imageContainer.style.opacity = 1;
        imageContainer.querySelector('img').style.transform = 'translateX(-50%) rotate(2520deg)'; // Girar 3 vezes
    }, 100);
});
