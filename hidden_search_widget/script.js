const search_btn = document.querySelector('.search-btn');
const search_bar = document.querySelector('.search-bar');
const input = document.querySelector('.input');

search_btn.addEventListener('click',()=>{
    //if it's active, deactives, if it's not, activates, cool, isn't it?
    search_bar.classList.toggle('active');
    input.focus();
});
