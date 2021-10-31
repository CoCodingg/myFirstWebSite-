const clockAll = document.querySelector(".clock-all");
const clockTime = document.querySelector(".clock-time");
const clockDayOfWeekend = document.querySelector(".clock-dayofweekend");

function Clock() {
    const date = new Date();
    const weekend = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    const year= date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = weekend[date.getDay()];
    
    clockAll.innerText = `${year}. ${month}. ${day}`;
    clockDayOfWeekend.innerText = `${dayOfWeek}`;

    if ( date.getHours() < 12 ){
        const hour = String(date.getHours()).padStart(2,"0");
        const minute = String(date.getMinutes()).padStart(2,"0");
        const second = String(date.getSeconds()).padStart(2,"0");
        clockTime.innerText = `AM ${hour}:${minute}:${second}`;
    }
    else {
        const hour = String(date.getHours() - 12).padStart(2,"0");
        const minute = String(date.getMinutes()).padStart(2,"0");
        const second = String(date.getSeconds()).padStart(2,"0");
        clockTime.innerText = `PM ${hour}:${minute}:${second}`;
    }
}

Clock();
setInterval(Clock, 1000);




const dDayForm = document.querySelector(".d-day__form");
const dDayInput = document.querySelector(".d-day__form input");
const dDayspan = document.querySelector(".d-day__form span");
const dDayFormBtn = document.querySelector(".d-day__form button");
const ex = document.querySelector(".ex");

function dday() {
    const userInputTime = dDayInput.value;
    const Chrisxmas = new Date(`${userInputTime}:00:00:00+0900`);
    const Today = new Date().getTime();
    const gap = Chrisxmas - Today;
    const day = String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(3,"0");
    dDayspan.innerText = `${day}일 남았습니다.`;
}



function userDDayInput(event){
    event.preventDefault();
    dDayInput.classList.add("hidden");
    dDayFormBtn.classList.add("hidden");
    dDayspan.classList.remove("hidden");
    ex.classList.add("hidden");
    const userInputtime = dDayInput.value;
    localStorage.setItem("userInputtime", userInputtime);
    dday();
    setInterval(dday, 1000);
}

const saveduserInputtime = localStorage.getItem("userInputtime");


if ( saveduserInputtime === null ){
    dDayInput.classList.remove("hidden");
    dDayFormBtn.classList.remove("hidden");
    dDayspan.classList.add("hidden");
    ex.classList.remove("hidden");
    dDayForm.addEventListener("submit",userDDayInput);
}
else {
    dDayInput.classList.add("hidden");
    dDayFormBtn.classList.add("hidden");
    dDayspan.classList.remove("hidden");
    ex.classList.add("hidden");
    saveddday(saveduserInputtime);
    setInterval(saveddday(saveduserInputtime), 1000);
}

function saveddday(saveduserInputtime) {
    const userInputTime = saveduserInputtime;
    const Chrisxmas = new Date(`${userInputTime}:00:00:00+0900`);
    const Today = new Date().getTime();
    const gap = Chrisxmas - Today;
    const day = String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(3,"0");
    dDayspan.innerText = `${day}일 남았습니다.`;
}


