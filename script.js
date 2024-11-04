const clockDiv  = document.querySelector("#clock")

setInterval(() => {
    let clock = new Date();
    clockDiv.innerText = clock.toLocaleTimeString("pt-br");
    }, 1000);