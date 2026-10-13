const container = document.getElementById("container");
const happybirthday = document.getElementById("happybirthday");
const muli = document.getElementById("muli");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", function() {
    container.style.display = "block";
    happybirthday.loop = true;
    happybirthday.play();
    playButton.style.display = "none";
});

container.addEventListener("click", function() {

    document.getElementById("playButton").style.display = "none";

    container.innerHTML = "i miss u";
    container.style.color = "#F06292";
    container.style.fontFamily = "Inter";
    container.style.fontWeight = "bold";
    container.style.fontSize = "5em";
    container.style.Width = "100%";
    container.style.margin = "0 25px";

    muli.play();
    happybirthday.pause();
});
