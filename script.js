const container = document.getElementById("container");
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");


container.addEventListener("click", function() {
    container.innerHTML = "I MISS U";
    container.style.color = "#F06292";
    container.style.fontFamily = "Inter";
    container.style.fontWeight = "bold";
    container.style.fontSize = "5em";
    container.style.Width = "100%";
    container.style.margin = "0 25px";

    audio1.play();
    audio2.pause();
});