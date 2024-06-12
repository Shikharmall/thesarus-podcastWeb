let a = 0;

function openoverlayer1(){
    if(a == 0){
        document.getElementById("overlayerview1").style.display = "block";
        document.getElementById("overlayerview1").style.display = "flex";
        document.getElementById("disablescroll").style.overflow = "hidden";
        a = 1;
    }
    else{
        document.getElementById("overlayerview1").style.display = "none";
        document.getElementById("disablescroll").style.overflow = "visible";
        a = 0;
    }
}

let b = 0;

function openoverlayer2(){
    if(b == 0){
        document.getElementById("overlayerview2").style.display = "block";
        document.getElementById("overlayerview2").style.display = "flex";
        document.getElementById("disablescroll").style.overflow = "hidden";
        b = 1;
    }
    else{
        document.getElementById("overlayerview2").style.display = "none";
        document.getElementById("disablescroll").style.overflow = "visible";
        b = 0;
    }
}


let c = 0;

function openoverlayer3(){
    if(c == 0){
        document.getElementById("overlayerview3").style.display = "block";
        document.getElementById("overlayerview3").style.display = "flex";
        c = 1;
    }
    else{
        document.getElementById("overlayerview3").style.display = "none";
        c = 0;
    }
}