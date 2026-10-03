const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");
const message = document.getElementById("message");

function generateColor() {
    const characters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function generatePalette() {
    palette.innerHTML = "";
    message.textContent = "";

    for (let i = 0; i < 5; i++) {
        const color = generateColor();

        const card = document.createElement("div");
        card.className = "color-card";
        card.style.backgroundColor = color;

        const name = document.createElement("div");
        name.className = "color-name";
        name.textContent = color;

        card.appendChild(name);

        card.addEventListener("click", () => {
            navigator.clipboard.writeText(color).then(() => {
                message.textContent = `${color} copied to clipboard`;
                setTimeout(() => {
                    message.textContent = "";
                }, 2000);
            });
        });

        palette.appendChild(card);
    }
}

generateBtn.addEventListener("click", generatePalette);

generatePalette();