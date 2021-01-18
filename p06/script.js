// Get DOM Element
const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const model = document.getElementById('model');
const close2 = document.getElementById('close2');

// Add event Listners
// 1. Toggle the Nav
toggle.addEventListener('click', () =>
    document.body.classList.toggle('show-nav')
);

// 2. Show the model
open.addEventListener('click', () => 
    model.classList.add('show-model')
);

// 2. Close the model
close.addEventListener('click', () => 
    model.classList.remove('show-model')
);

// 4. CLose the model on click outside mdel
window.addEventListener('click', e =>
    e.target === model ? model.classList.remove('show-model') : false
);

