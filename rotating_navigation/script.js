const open_button = document.getElementById('open');
const close_button = document.getElementById('close');
const container = document.querySelectorAll('.container')[0];

open_button.onclick = function(){
    container.classList.add('show-nav');
}

close_button.onclick = function(){
    container.classList.remove('show-nav');
}