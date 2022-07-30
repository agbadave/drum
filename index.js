var noOfButtons =  document.querySelectorAll(".btn").length;

for (i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", alapo);
}




function alapo() {
  var buttons = this.innerHTML;
  switch (buttons) {
   case "D":
     var dave1 = new Audio("recordings/crash.mp3");
     dave1.play();
   break;

   case "a":
     var dave2 = new Audio("recordings/tom-2.mp3");
     dave2.play();
   break;

   case "v":
     var dave3 = new Audio("recordings/tom-3.mp3");
     dave3.play();
   break;

   case "i":
     var dave4 = new Audio("recordings/tom-4.mp3");
     dave4.play();
   break;

   case "d":
     var dave5 = new Audio("recordings/tom-1.mp3");
     dave5.play();
   break;

   default:

 }
}
