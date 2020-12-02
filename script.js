let count = 0,
    flag = true,
    temp = true,
    seconds,
    timer = 5000;

function setTimer(x) {
    timer = x;
}

function boxClicked(e) {
    console.log(timer);
    seconds = new Date().getSeconds();
    if (flag) {
        setTimeout(() => {
            temp = false;
        }, timer);
        flag = false;
    }
    if (temp) {
        count++;
        document.querySelector(".count").innerHTML =
            "Number of Clicks: " + count;
    }
    let cps = count / (timer / 1000);
    document.querySelector(".cps").innerHTML = "CPS: " + cps;
}
