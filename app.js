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
    

});


