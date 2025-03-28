console.log("matched!");
var but = document.getElementById("inp-b");
var titr = document.getElementById("m");
var matn = document.getElementById("inp-t");
function changeColor() {
    if (!matn || !titr)
        return; // بررسی مقدار نال بودن
    var ColorTxt = matn.value; // مقدار متن ورودی را بگیر
    console.log(ColorTxt);
    titr.style.color = ColorTxt; // تغییر رنگ عنوان
}
if (but) {
    but.addEventListener("click", changeColor);
}
