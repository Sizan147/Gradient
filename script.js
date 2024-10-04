let btn1 = document.querySelector(".b1");
let btn2 = document.querySelector(".b2");
let hexaCodeVariables = "0123456789abcdef";
let rgb1= "#814146",rgb2="#4052ab";
let copyCode = document.querySelector(".copyCode");

const hexNumber = () =>{
    let color = "#";
    for(i=0; i<6; i++){
        color = color + hexaCodeVariables[Math.floor(Math.random() * 16)];
    }
    return color;
}
let changeHex = () =>{
    document.querySelector(".body-sec").style.backgroundImage = `linear-gradient(0deg, ${rgb1} , ${rgb2} 100%)`;
    document.querySelector(".copyCode").innerHTML = `background-image: linear-gradient(0deg, ${rgb1} 0%, ${rgb2} 100%);`;
};
const changeGradient1 = () =>{
    rgb1 = hexNumber();
    console.log(rgb1);
    changeHex();
    btn1.innerHTML = rgb1;
    btn1.style.background = rgb1;
};
const changeGradient2 = () =>{
    rgb2 = hexNumber();
    changeHex();
    btn2.innerHTML = rgb2;
    btn2.style.background = rgb2;
};

btn1.addEventListener("click", changeGradient1);
btn2.addEventListener("click", changeGradient2);
document.querySelector(".code-copy").addEventListener("click", ()=>{
    navigator.clipboard.writeText(copyCode.innerText);
});

