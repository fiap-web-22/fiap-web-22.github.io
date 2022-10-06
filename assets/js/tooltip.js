const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");

//alvo.addEventListener("evento", função); - estrutura de um evento

body.addEventListener('mouseover', (e) => {
    body.style.background = 'gray';
});

body.addEventListener('mouseout', (e) => {
    body.style.background = "unset";
})


const addText = (target, text) =>{
    const body = document.querySelector("body");
    const tooltipTarget = document.querySelector(target);

    const newDiv = document.createElement(target);
    newDiv.classList.add("tooltip"); //classe adicionada para ser estilizada no scss
    newDiv.innerHTML = text;

    tooltip.addEventListener('mouseover', (e) => {

        console.log("Altura da página", body.clientHeight);
        console.log("Largura da página", body.clientWidth);
        console.log("Altura do tooltip", tooltip.clientHeight);
        console.log("Largura do tooltip", tooltip.clientWidth);
        console.log("Altura do mouse", e.clientY);
        console.log("Largura do mouse", e.clientX);
        
        if(document.querySelector(".tooltip")) {
            document.querySelector(".tooltip").remove();
        }
        
        newDiv.style.position = "fixed";
        newDiv.style.top = e.clientY + "px";
        newDiv.style.left = (e.clientX + 200 > body.clientWidth ? e.clientX - 220 : e.clientX + 200) + "px";    
        newDiv.style.display = "flex";
        
        tooltipTarget.parentNode.appendChild(newDiv);
    });

    tooltip.addEventListener('mouseout', (e) => {
        if(document.querySelector(".tooltip")) {
            document.querySelector(".tooltip").remove();
        } 
    });
};

addText("div", "Texto teste!")



//DESAFIO

//criar o tooltip da linha 15 a 45 em uma função

// chamar: tooltip("#tooltip", "texto do tooltip");