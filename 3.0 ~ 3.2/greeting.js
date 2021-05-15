const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector("js-greetings");

const user_LS = "currentUser";
const SHOWING_ON = "showing";

function paintGreeting(text) {
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(user_LS);
    if(currentUser === null) {
        
    }
    else {
        paintGreeting(currentUser);
    }
}




function init() {
    loadName();

};
init();