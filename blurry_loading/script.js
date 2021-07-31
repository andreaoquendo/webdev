const background = document.querySelector('.bg-image');
const counter = document.querySelector('.counter');
var timer = 100;



var interval = setInterval(()=> {
    
    timer--;
    counter.innerHTML = `${100-timer}%`;
    background.style.filter = `blur(${scale(timer, 0, 100, 0, 20)}px)`;
    background.style.webkitFilter = `blur(${scale(timer, 0, 100, 0, 30)}px)`;
    counter.style.opacity = `${scale(timer, 0, 100, 0, 1)}`;

    if(timer == 0) clearInterval(interval);

}, 100);

const scale = (num, in_min, in_max, out_min, out_max) => {
    return((num- in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}