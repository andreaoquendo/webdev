const panels = document.querySelectorAll('.panel');


panels[0].classList.add('active');

panels.forEach((panel) => {
    panel.addEventListener('click', () =>{
        removeActiveClasses();
        panel.classList.add('active');
        active_panel = panel;
    })
});

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}