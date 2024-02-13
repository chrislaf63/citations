const reponse = await fetch("datas.json");
const fragments = await reponse.json();
const fragment1 = fragments.fragment1;
const fragment2 = fragments.fragment2;
const fragment3 = fragments.fragment3;
const buttonGenerate = document.querySelector("#generate");
const buttonCls = document.querySelector("#clean");
const buttonForYou = document.querySelector("#foryou");
const image = document.querySelector("#image");
const save = document.querySelector("#save");
const main = document.querySelector("main");
const background = [
    "red",
    "blue",
    "black",
    "green",
    "greenyellow",
    "orange",
    "white",
    "violet",
];
const colors = [
    "red",
    "blue",
    "black",
    "green",
    "greenyellow",
    "orange",
    "white",
    "violet",
];
const polices = [
    "Courrier New",
    "Arial",
    "Helvetica",
    "sans-serif",
    "Georgia",
    "Times",
    "serif",
    "Playfair Display",
    "Honk",
];

const fontSizes = [
    "20px",
    "25px",
    "30px",
    "35px",
    "40px",
    "45px",
    "50px",
    "55px",
];

let rand;
let fg1;
let fg2;
let fg3;
let citation;
let bg;
let color;
let police;
let fontSize;

let idCount = 0;
function generate() {
    let iteration = document.getElementById("iterate").value * 1;
    if (iteration == 0) {
        iteration = 1;
    }
    for (let i = 0; i < iteration; i++) {
        idCount++;
        const generated = document.createElement("p");
        rand = Math.floor(Math.random() * 18);
        fg1 = fragment1[rand];
        rand = Math.floor(Math.random() * 18);
        fg2 = fragment2[rand];
        rand = Math.floor(Math.random() * 18);
        fg3 = fragment3[rand];
        citation = fg1 + " " + fg2 + " " + fg3;
        generated.innerText = citation;
        generated.setAttribute("id", idCount);
        main.appendChild(generated);
    }
}

function generate2() {
    idCount++;
    const generated = document.createElement("div");
    generated.setAttribute("class", "box");
    const sentence = document.createElement("p");
    sentence.setAttribute("id", "sentence");
    rand = Math.floor(Math.random() * 18);
    fg1 = fragment1[rand];
    rand = Math.floor(Math.random() * 18);
    fg2 = fragment2[rand];
    rand = Math.floor(Math.random() * 18);
    fg3 = fragment3[rand];
    citation = fg1 + " " + fg2 + " " + fg3;
    rand = Math.floor(Math.random() * background.length);
    bg = background[rand];
    rand = Math.floor(Math.random() * colors.length);
    color = colors[rand];
    rand = Math.floor(Math.random() * polices.length);
    police = polices[rand];
    rand = Math.floor(Math.random() * fontSizes.length);
    fontSize = fontSizes[rand];
    sentence.innerText = citation;
    sentence.style.verticalAlign = "middle";
    generated.setAttribute("id", idCount);
    generated.style.border = `5px solid ${color}`;
    generated.style.backgroundColor = bg;
    generated.style.color = color;
    generated.style.fontFamily = police;
    generated.style.fontSize = fontSize;
    generated.appendChild(sentence);
    main.appendChild(generated);
}

function cls() {
    for (let i = idCount; i >= 0; i--) {
        const p = document.getElementById(idCount);
        if (p === null) {
            return;
        }
        p.remove();
        idCount--;
    }
}

function capture() {
    const captureElement = document.querySelector(".box");
    html2canvas(captureElement)
        .then((canvas) => {
            canvas.style.display = "none";
            document.body.appendChild(canvas);
            return canvas;
        })
        .then((canvas) => {
            const image = canvas.toDataURL("image/png");
            const a = document.createElement("a");
            a.setAttribute("download", "ma-citation.png");
            a.setAttribute("href", image);
            a.click();
            canvas.remove();
        });
}

buttonGenerate.addEventListener("click", generate);
buttonCls.addEventListener("click", cls);
buttonForYou.addEventListener("click", function () {
    cls();
    generate2();
});
save.addEventListener("click", capture);
