function applyAction(elementId, callback) {
    var el = document.getElementById(elementId);
    el.addEventListener("click", function () {
        callback.call(this);   
    });
}

function color() {
    this.style.background =
        this.style.background === "lightgreen" ? "white" : "lightgreen";
}

applyAction("colorBox", color);   


applyAction("sizeBox", function () {
    this.style.transform =
        this.style.transform === "scale(1.2)" ? "scale(1)" : "scale(1.2)";
});


applyAction("toggleBox", function () {
    this.innerText = this.innerText === "" ? "Click to hide / show text" : "";
});


var moved = false;

applyAction("Box", function () {
    switch (moved) {
        case false:
            this.style.left = "60px";
            moved = true;
            break;
        case true:
            this.style.left = "0px";
            moved = false;
            break;
    }
});


// ---------- BOX 5 — Hover (uses 'this') ----------
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function () {
    this.style.background = "#3498db";
    this.style.color = "white";
});

hoverBox.addEventListener("mouseout", function () {
    this.style.background = "white";
    this.style.color = "black";
});