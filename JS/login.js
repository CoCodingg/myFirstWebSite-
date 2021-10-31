const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginbutton = loginForm.querySelector("button");
const userlogin = document.querySelector(".userlogin");




function login(event){
   event.preventDefault();
   loginForm.classList.add("hidden");
   userlogin.classList.remove("hidden");
   const savedusername = loginInput.value;
   userlogin.innerText = `Welcome! ${savedusername}`;
   localStorage.setItem("savedusername",savedusername);
}

const saveduserinformation = localStorage.getItem("savedusername");

if (saveduserinformation === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", login);
}
else{
    userlogin.classList.remove("hidden");
    userlogin.innerText = `방문을 환영합니다. ${saveduserinformation}님`;
}