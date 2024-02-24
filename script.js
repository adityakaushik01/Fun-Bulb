let onbulb = document.getElementById('on');
let offbulb = document.getElementById('off');
let onbtn = document.getElementById('onbtn');
let offbtn = document.getElementById('offbtn');


// onbulb.addEventListener('click', ()=>{
//     onbulb.style.display = 'none';
//     offbulb.style.display = 'block';
// })

// offbulb.addEventListener('click', ()=>{
//     offbulb.style.display = 'none';
//     onbulb.style.display = 'block';
// })

onbulb.addEventListener('click', on);

offbulb.addEventListener('click', off);

onbtn.addEventListener('click', off);

offbtn.addEventListener('click', on);



function off() {
    offbulb.style.display = 'none';
    onbulb.style.display = 'block';
}

function on() {
    onbulb.style.display = 'none';
    offbulb.style.display = 'block';
}
