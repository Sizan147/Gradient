let btn1 = document.querySelector(".b1");
let btn2 = document.querySelector(".b2");
let hexCodeVariables = "0123456789abcdef";
let rgb1= localStorage.getItem("rgb01")||"#814146",rgb2= localStorage.getItem("rgb02")||"#4052ab";
let copyCode = document.querySelector(".copyCode");

const hexNumber = () =>{
    let color = "#";
    for(i=0; i<6; i++){
        color = color + hexCodeVariables[Math.floor(Math.random() * 16)];
    }
    return color;
}
let changeHex = () =>{
    document.querySelector(".body-sec").style.backgroundImage = `linear-gradient(to right, ${rgb1} , ${rgb2} 100%)`;
    document.querySelector(".copyCode").innerHTML = `background-image: linear-gradient(to right, ${rgb1} 0%, ${rgb2} 100%);`;
};

changeHex();

const presetButtonColor = ()=>{
    btn1.innerHTML = rgb1;
    btn1.style.background = rgb1;
    btn2.innerHTML = rgb2;
    btn2.style.background = rgb2;
};

presetButtonColor();

const changeGradient1 = () =>{
    rgb1 = hexNumber();
    changeHex();
    btn1.innerHTML = rgb1;
    btn1.style.background = rgb1;
    localStorage.setItem("rgb01", rgb1);
};
const changeGradient2 = () =>{
    rgb2 = hexNumber();
    changeHex();
    btn2.innerHTML = rgb2;
    btn2.style.background = rgb2;
    localStorage.setItem("rgb02", rgb2);
};

btn1.addEventListener("click", changeGradient1);
btn2.addEventListener("click", changeGradient2);
document.querySelector(".code-copy").addEventListener("click", ()=>{
    navigator.clipboard.writeText(copyCode.innerText);
});
