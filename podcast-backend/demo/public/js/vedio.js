function showcontrols(){
    document.getElementById("showcontrol").style.visibility = "visible";
}

function showcontrolshide(){
    document.getElementById("showcontrol").style.visibility = "hidden";
}



let x = 0;

function moredescription(){

    var a = document.getElementById("moredescription");

    if(x!=0){
        a.classList.remove("imaginary");
        a = 1;
    }

    a.classList.toggle("show");
    
    var b = document.getElementById("button1");
    b.classList.toggle("imaginary");
        
}

function myFunctionhidecopyyyy() {
    document.getElementById("copyid").style.display = "none";
}

function myFunctionlink() {

    var currentPageLink = window.location.href;

    // Create a temporary input element
    var tempInput = document.createElement('input');
    tempInput.value = currentPageLink;
    document.body.appendChild(tempInput);
  
    // Select and copy the value of the input
    tempInput.select();
    document.execCommand('copy');
  
    // Remove the temporary input element
    document.body.removeChild(tempInput);
  
    // Optionally, provide feedback to the user
    //alert('Link copied to clipboard!');

    document.getElementById("copyid").style.display = "block";
    document.getElementById("copyid").style.display = "flex";
      
    setTimeout(myFunctionhidecopyyyy, 4000);

}