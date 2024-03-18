let a = 0;

var slides = document.getElementsByClassName("videoslide");
slides[0].style.display = "block";


var dots = document.getElementsByClassName("dot");
//dots[0].className = dots[0].className.replace("dot", "active");

dots[0].classList.add("activevideo");


function myslider(n,m){
    if(m == 0){
        a = a + n;
        
        if(a == -1){
           a = 3;
        }
    
        if(a == 4){
            a = 0;
        }

    }

    if(m == 1){
        a = 0;
    }

    if(m == 2){
        a = 1;
    }

    if(m == 3){
        a = 2;
    }

    if(m == 4){
        a = 3;
    }


    var slides = document.getElementsByClassName("videoslide");
    var dots = document.getElementsByClassName("dot");


    for(let i = 0; i < slides.length; i++){
        if(a == i){
            slides[i].style.display = "block";
            dots[i].classList.add("activevideo");
        }
        else{
            slides[i].style.display = "none";
            dots[i].classList.remove("activevideo");
        }
    }

}