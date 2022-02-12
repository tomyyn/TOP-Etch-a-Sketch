const GRIDSIZE=640;
let gridOn = true;
let color = "black";

function darken(value){
    return value>26?value-26:0;
}

function colorSquare(e){
    if(color=="shader"){
        let c=e.target.style.backgroundColor;
        if(c=="white") c="rgb(229,229,229)";
        else if(c!="black"){
            c=c.slice(4,-1).split(", ")
            c=`rgb(${darken(c[0])},${darken(c[1])},${darken(c[2])})`
        }
        e.target.style.backgroundColor=c;

    }
    else if(color=="chaos"){
        e.target.style.backgroundColor=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    }
    else{
        e.target.style.backgroundColor=color;
    }
}

function createSquare(tam){
    const sqr=document.createElement("div");
    sqr.style.cssText=`width: ${tam}px; height: ${tam}px; margin:0px; box-sizing: border-box; border: ${gridOn?"1px solid black":"0px"}; background:white`;
    sqr.addEventListener("mouseenter",colorSquare);
    return sqr;
}

function createGrid(n){
    const grid = document.querySelector("#grid");
    while(grid.firstChild) grid.removeChild(grid.lastChild);
    let tam = GRIDSIZE/n;
    n*=n;
    for(let i=0;i<n;i++) grid.appendChild(createSquare(tam));
}

function resize(){
    let n = prompt("Enter new size (in squares by side) between 1 and 100");
    while((n) && (n <1 || n>100 || isNaN(+n))){
        console.log(n);
        n = prompt("Enter new size (in squares by side) between 1 and 100");
    }
    if(n) createGrid(n);
}

function toggleGrid(e){
    gridOn=!gridOn;
    
    sqrs=document.querySelectorAll("#grid div")
    if(gridOn){
        sqrs.forEach(sqr => {
            sqr.style.border="1px solid black";
        });
        e.target.textContent="Grid: on"
    }
    else{
        sqrs.forEach(sqr => {
            sqr.style.border="0px";
        });
        e.target.textContent="Grid: off"
    }
}

function selectMode(e){
    e.target.classList.add("big")
    const prev=document.querySelector(`#${color}`)
    prev.classList.toggle("big")
    color=e.target.id;
}

const resizeB=document.querySelector("#resize");
resizeB.addEventListener("click",resize);

const gridB=document.querySelector("#gridB");
gridB.addEventListener("click",toggleGrid);

const modes=document.querySelectorAll(".modes button")
modes.forEach(mode=>{
    mode.addEventListener("click",selectMode);
})

createGrid(16);