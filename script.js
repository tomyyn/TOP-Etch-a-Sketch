const GRIDSIZE=640;
let gridOn = true;
let color = "black";


function colorSquare(e){
    e.target.style.backgroundColor=color;
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

const resizeB=document.querySelector("#resize");
resizeB.addEventListener("click",resize);

const gridB=document.querySelector("#gridB");
gridB.addEventListener("click",toggleGrid);

createGrid(16);