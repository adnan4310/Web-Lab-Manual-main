// BOX 1 — Change Background Color
document.getElementById("colorBox").addEventListener("click", function () {
    this.style.background = this.style.background === "lightgreen" ? "white" : "lightgreen";
});


// BOX 2 — Increase size
document.getElementById("sizeBox").addEventListener("click", function () {
    this.style.transform = this.style.transform === "scale(1.2)" ? "scale(1)" : "scale(1.2)";
});


// BOX 3 — Toggle Text Visibility
document.getElementById("toggleBox").addEventListener("click", function () {
    if (this.innerText === "") {
        this.innerText = "Click to hide / show text";
    } else {
        this.innerText = "";
    }
});


// BOX 4 — Move Box
let moved = false;

document.getElementById("moveBox").addEventListener("click", function () {
    this.style.left = moved ? "0px" : "60px";
    moved = !moved;
});


// BOX 5 — Hover effect USING “this”
document.getElementById("hoverBox").addEventListener("mouseover", function () {
    this.style.background = "#3498db";
    this.style.color = "white";
});

document.getElementById("hoverBox").addEventListener("mouseout", function () {
    this.style.background = "white";
    this.style.color = "black";
});
