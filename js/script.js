let startTime = 10;

const clockElem = document.querySelector(".clock");
clockElem.innerHTML = startTime;
clockElem.classList.add("upscale");


const time = setInterval(function() {

    
    console.log(startTime);
    startTime = countdown(startTime)

    clockElem.innerHTML = startTime;
    


    if(startTime === 0){
        clockElem.classList.remove("upscale");
        clockElem.innerHTML = "Buon Anno";
        clockElem.classList.add("new-year");
        clearInterval(time);
    }
}, 1000);