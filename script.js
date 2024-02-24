let onbulb = document.getElementById('on');
let offbulb = document.getElementById('off');
let main = document.getElementById('main');


onbulb.addEventListener('click', ()=>{
    onbulb.style.display = 'none';
    offbulb.style.display = 'block';
})

offbulb.addEventListener('click', ()=>{
    offbulb.style.display = 'none';
    onbulb.style.display = 'block';
})

// main.addEventListener('click', ()=>{
//     main.style.backgroundColor = 'red';
// })

