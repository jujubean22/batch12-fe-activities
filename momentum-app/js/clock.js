const clock = document.querySelector(".clock");

function clockTime() {
    const date = new Date();
    let hours = String(date.getHours());
    hours = (hours % 12) || 12;
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.textContent = (`${hours}:${minutes}:${seconds}`);
}

clockTime();
setInterval(clockTime, 1000);
