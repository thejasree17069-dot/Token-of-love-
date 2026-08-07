const text = "Something I've Never Told You...";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

window.onload = function () {

    if (document.getElementById("typing")) {
        typeWriter();
    }

    if (document.getElementById("heart-container")) {
        createHeart();
    }

};

function createHeart() {

    const container = document.getElementById("heart-container");

    if (!container) return;

    container.innerHTML = "";

    const scale = 11;

    for (let t = 0; t < Math.PI * 2; t += 0.08) {

        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t)
                - 5 * Math.cos(2 * t)
                - 2 * Math.cos(3 * t)
                - Math.cos(4 * t);

        const love = document.createElement("div");
        love.className = "love";
        love.innerText = "I love you";

        love.style.left =
            (window.innerWidth / 2 + x * scale) + "px";

        love.style.top =
            (window.innerHeight / 2 - y * scale - 120) + "px";

        love.style.opacity = "0";

        container.appendChild(love);

        setTimeout(() => {
            love.style.transition = "1.5s";
            love.style.opacity = "1";
        }, Math.random() * 1500);
    }
}
