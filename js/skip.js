let w1 = document.getElementsByClassName("button")[0];
let w2 = document.getElementsByClassName("button")[1];
let w3 = document.getElementsByClassName("button")[2];
let w4 = document.getElementsByClassName("button")[3];
let w5 = document.getElementsByClassName("button")[4];
let w6 = document.getElementsByClassName("button")[5];
let w0 = document.getElementsByClassName("button")[6];

let content1 = document.querySelector(".content1");
let content2 = document.querySelector(".content2");
let content3 = document.querySelector(".content3");
let content4 = document.querySelector(".content4");
let content5 = document.querySelector(".content5");
let content6 = document.querySelector(".content6");
let content7 = document.querySelector(".content7");
content2.style.display = "none";
content3.style.display = "none";
content4.style.display = "none";
content5.style.display = "none";
content6.style.display = "none";
content7.style.display = "none";

w0.onclick = function () {
    content1.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
}

w2.onclick = function () {
    content1.style.display = "none";
    content2.style.display = "block";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
}

w1.onclick = function () {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "block";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
}

w3.onclick = function () {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "block";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
}

w4.onclick = function () {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "block";
    content6.style.display = "none";
    content7.style.display = "none";
}

w5.onclick = function () {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "block";
    content7.style.display = "none";
}

w6.onclick = function () {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "block";
}