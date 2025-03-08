const yaree = document.getElementById("yaree");
const masax = document.getElementById("masax");
const kordhi = document.getElementById("kordhi");
const countlabel = document.getElementById("countlabel");
let count = 0;

kordhi.onclick = function(){
    count++; 
    countlabel.textContent = count;
}

yaree.onclick = function(){
    count--; 
    countlabel.textContent = count;
}

masax.onclick = function(){
    count = 0; 
    countlabel.textContent = count;
}