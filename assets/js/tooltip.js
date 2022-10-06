const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");


// alvo.addEventListener("evento", função);

body.addEventListener("mouseover", (e)=>{
    body.style.background = "gray";
});

body.addEventListener("mouseout", (e)=>{
    body.style.background = 'unset';
});

tooltip.addEventListener("mouseover", (e)=>{
console.log("altura da página", body.clientHeight);
console.log("largura da página", body.clientWidth);
console.log("altura do tooltip", tooltip.clientHeight);
console.log("largura do tooltip", tooltip.clientWidth);
console.log("altura do mouse", e.clientY);
console.log("largura dao mouse", e.clientX);

    if(document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
    }
const newDiv =  document.createElement("div");
newDiv.classList.add("tooltip");
newDiv.innerHTML = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";


const largura = 200;
  newDiv.style.position = "fixed";
  newDiv.style.width = largura + "px";
  newDiv.style.top = e.clientY + "px";
  newDiv.style.display = "flex";
  newDiv.style.left =
    (e.clientX + largura > body.clientWidth
      ? e.clientX - largura - 20
      : e.clientX + largura) + "px";

  console.log(newDiv.style.width, "width");

  header.appendChild(newDiv);
});


tooltip.addEventListener("mouseout", (e)=>{
    if(document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
    }
})