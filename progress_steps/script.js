const progress_bar = document.querySelector('#progress');
const next_btn = document.querySelector('#next');
const prev_btn = document.querySelector('#prev');
const arr_circles = document.querySelectorAll('.circle');
let currentActive = 0;

next_btn.addEventListener('click', ()=>{

    if(currentActive < arr_circles.length - 1){
        currentActive++;
        arr_circles[currentActive].classList.add('active');
    }

    setProgressBar();

    prev_btn.disabled = false;
    if(currentActive == arr_circles.length-1){
        next_btn.disabled = true;
    }
    
});

prev_btn.addEventListener('click', ()=>{
    
    if(currentActive > 0)
        arr_circles[currentActive].classList.remove('active');
    currentActive--;

    setProgressBar();

    next_btn.disabled = false;
    if(currentActive == 0)
        prev_btn.disabled = true;
    
})

function setProgressBar(){
    percentage = 100*currentActive/(arr_circles.length-1);
    progress_bar.style.width = percentage.toString() + '%';
}
