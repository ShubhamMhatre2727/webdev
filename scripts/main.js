// // Js  add interactivity to a website.

// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World";

// // built in function
// alert("Hello");

// // user defined fns
// function multiply(num1, num2) {
//     let result = num1*num2;
//     return result;
// }

// // Events
// document.querySelector("html").addEventListener("click", ()=>{
//     alert("you clicked on html page");
// })


// on click on image changes
const myImage = document.querySelector("img");

myImage.onclick = ()=>  {
    const mysrc = myImage.getAttribute("src");
    if (mysrc === "images/chrome.png") {
        myImage.setAttribute("src", "images/Microsoft_Edge.png");
    }
    else {
        myImage.setAttribute("src", "images/chrome.png");
    }
};

// adding personalized welcome message
let mybtn = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Web dev is cool, ${myName}`;
    }
};

if(!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Web dev is cool, ${storedName}`;
};

mybtn.onclick = ()=> {
    setUserName();
};