const naverBtn = document.querySelector(".naverbtn");
const instagramBtn = document.querySelector(".instagrambtn");
const facebookBtn = document.querySelector(".facebookbtn");
const googleBtn = document.querySelector(".googlebtn");
const youtubeBtn = document.querySelector(".youtubebtn");
const netflixBtn = document.querySelector(".netflixbtn");

naverBtn.addEventListener("click", naverpg);
instagramBtn.addEventListener("click", instagrampg);
facebookBtn.addEventListener("click", facebookpg);
googleBtn.addEventListener("click", googlepg);
youtubeBtn.addEventListener("click", youtubepg);
netflixBtn.addEventListener("click", netflixpg);

function naverpg(){
    window.open("https://www.naver.com/");
}

function instagrampg(){
    window.open("https://www.instagram.com/");
}

function facebookpg(){
    window.open("https://www.facebook.com/");
}

function googlepg(){
    window.open("https://www.google.co.kr");
}

function youtubepg(){
    window.open("https://www.youtube.com/");
}

function netflixpg(){
    window.open("https://www.netflix.com/");
}

