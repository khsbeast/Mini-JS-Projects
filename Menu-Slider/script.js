const toggleBtn = document.getElementById('toggle');
const toggleBar = document.getElementById('toggleBars');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle Navigation

toggleBtn.addEventListener('click',()=>document.body.classList.toggle('show-nav'))

// Changing toggle icon
toggleBar.addEventListener('click',()=>toggleBar.classList.toggle('fa-times'))


// Show Modal

open.addEventListener('click', ()=>{
    modal.classList.add('show-modal');
})

// Hide Modal

close.addEventListener('click',()=> {modal.classList.remove('show-modal')})

window.addEventListener('click',e =>{
    e.target == modal ? modal.classList.remove('show-modal'):false
})