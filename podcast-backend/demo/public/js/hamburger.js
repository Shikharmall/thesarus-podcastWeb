 function opennav(){
   document.getElementById("openham").style.display = "block";
   setTimeout(myGreeting, 250);
   document.getElementById("disablescroll").style.overflow = "hidden";


 }

function myGreeting() {
  document.getElementById("subopenham").style.display = "block";
  document.getElementById("subopenham").style.display = "flex";
}

 function closenav(){
   document.getElementById("openham").style.display = "none";
   document.getElementById("subopenham").style.display = "none";
   document.getElementById("disablescroll").style.overflow = "visible";
 }