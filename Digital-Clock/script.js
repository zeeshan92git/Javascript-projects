
function getTimenow() {

    const hourEl = document.getElementById("hours");
    const minuteEl = document.getElementById("minutes");
    const secondEl = document.getElementById("seconds");

    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.textContent = h;
    minuteEl.textContent = m;
    secondEl.textContent = s;


};
getTimenow();
setInterval(getTimenow, 1000);