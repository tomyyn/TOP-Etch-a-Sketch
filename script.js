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
    if(GRIDSIZE%n!=0) return
    const grid = document.querySelector("#grid");
    let tam = GRIDSIZE/n;
    n*=n;
    for(let i=0;i<n;i++) grid.appendChild(createSquare(tam));
}

createGrid(16);