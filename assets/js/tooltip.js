const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector("top-site");


// alvo.addEventListener("evento", função);

body.addEventListener('mouseover', ()=>{
    body.style.background = 'gray';
});

body.addEventListener('mouseout', ()=>{
    body.style.background = 'unset';
});

tooltip.addEventListener('mouseover', ()=>{
const newDiv =  document.createElement('div');
newDiv.classList.add('tooltip');
});