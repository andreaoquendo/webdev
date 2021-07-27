var panels = document.getElementsByClassName('panel');
panels = Array.from(panels);

var active_panel = panels[0];
active_panel.classList.add('active');

panels.forEach(panel => {
    panel.addEventListener('click', () =>{
        active_panel.classList.remove('active');
        panel.classList.add('active');
        active_panel = panel;
    })
});