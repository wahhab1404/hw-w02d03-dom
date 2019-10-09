const newImg = document.querySelector(".image");
const img = document.createElement("img");
newImg.appendChild(img);
const buttonRandom = document.querySelector('button');
console.log(buttonRandom)
let url = "https://source.unsplash.com/1600x900"
const clickBtn = function(){
    console.log("hi");
    url +="?" + Math.floor(Math.random()*1000);
    img.setAttribute("src",url);
}
buttonRandom.addEventListener("click", clickBtn);