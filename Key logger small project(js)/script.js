const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("startbtn");
const stopBtn = document.getElementById("stopbtn");

function handleDown(e) {
    logDiv.textContent = `Key "${e.key}" pressed down`;
    stateDiv.textContent = "Key is down";
}

function handleUp(e) {
    logDiv.textContent = `Key "${e.key}" released`;
    stateDiv.textContent = "Key is up";
}

startBtn.addEventListener("click", () => {
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
    document.removeEventListener("keydown", handleDown);
    document.removeEventListener("keyup", handleUp);
    logDiv.textContent = "";
    stateDiv.textContent = "";
    stopBtn.disabled = true;
    startBtn.disabled = false;
});