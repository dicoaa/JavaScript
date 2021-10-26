const button = document.getElementById("button");
const body = document.querySelector("body");
const colorNumber = document.querySelector(".color-number");

// generateRandomColor();

function setBackground () {
    const newColor = generateRandomColor();
    colorNumber.textContent = newColor;
    body.style.backgroundColor = newColor;
    colorCard.style.backgroundColor = newColor;
}

button.addEventListener("click", setBackground);

function generateRandomColor () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
   
    const rgbColor = `rgb(${r},${g},${b})`;
    // console.log(rgbColor);
    return rgbColor;
};