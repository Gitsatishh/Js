let btn = document.querySelector("button");
btn.addEventListener("click", function(){

    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let rgb =`rgb(${red}, ${green}, ${blue})`; 
    let h4 = document.querySelector("h4");
    h4.innerText = rgb;

    let div = document.querySelector("div");
    div.style.backgroundColor = rgb;
    h1.style.backgroundColor = rgb;
    h3.style.backgroundColor = rgb;
    h5.style.backgroundColor = rgb;
    botton.style.backgroundColor = rgb;
});


let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let h5 = document.querySelector("h5");
let botton = document.querySelector("#botton");

