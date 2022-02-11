const GRIDSIZE=640;
let gridOn = true;
let color = "black";

function colorSquare(e){
    e.target.style.backgroundColor=color;
}

function createSquare(tam){
    const sqr=document.createElement("div");
    sqr.style.cssText=`width: ${tam}px; height: ${tam}px; margin:0px; box-sizing: border-box; border: 1px solid black`;
    sqr.addEventListener("mouseenter",colorSquare)
    return sqr;
}

function createGrid(n){
    const grid = document.querySelector("#grid");
    while(grid.firstChild) grid.removeChild(grid.lastChild);
    let tam = GRIDSIZE/n;
    n*=n;
    for(let i=0;i<n;i++) grid.appendChild(createSquare(tam));
}

function resize(e){
    let n = prompt("Enter new size (in squares by side) between 1 and 100");
    while((n) && (n <1 || n>100 || isNaN(+n))){
        console.log(n);
        n = prompt("Enter new size (in squares by side) between 1 and 100");
    }
    if(n) createGrid(n);
}

const resizeB=document.querySelector("#resize");
resizeB.addEventListener("click",resize);

createGrid(16);