
 var numberOfChrisButtons = document.querySelectorAll(".chris").length;

 for (var i = 0; i<numberOfChrisButtons; i++) {

   document.querySelectorAll(".chris")[i].addEventListener("click", function () {

     var buttonInnerHTML = this.innerHTML;

     switch (buttonInnerHTML) {
       case "a":
       var audio = new Audio("sounds/aware.mp3");
       audio.play();
       break;

       case "b":
       var audio = new Audio("sounds/awesome.mp3");
       audio.play();
       break;

       case "c":
       var audio = new Audio("sounds/flat.mp3");
       audio.play();
       break;

       case "d":
       var audio = new Audio("sounds/hell.mp3");
       audio.play();
       break;

       case "e":
       var audio = new Audio("sounds/sweet.mp3");
       audio.play();
       break;

       default: console.log(buttonInnerHTML);
     }

   })
 }








 //var audio = new Audio("sounds/aware.mp3");
// audio.play();
