console.log("matched!");

const but = document.getElementById("inp-b") as HTMLButtonElement;
const titr = document.getElementById("m") as HTMLElement;
const matn = document.getElementById("inp-t") as HTMLInputElement;

function changeColor() {
    if (!matn || !titr) return; 

    const ColorTxt = matn.value;
    console.log(ColorTxt);
    titr.style.color = ColorTxt; 
}

if (but) {
    but.addEventListener("click", changeColor);
}
