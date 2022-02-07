

// FOR BUTTON PRESS

for (var i = 0; i < document.querySelectorAll("button").length; i++) {


  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {
    var drumInnerHtml = this.innerHTML;

    makeSound(drumInnerHtml);

    animation(drumInnerHtml);


  }

}



// FOR KEY PRESS

document.addEventListener("keydown",function(event){

makeSound(event.key);

animation(event.key);

})




function makeSound(key){


  switch (key) {
    case "w":
      var audio1 = new Audio('sounds/tom-1.mp3')
      audio1.play();
      break;

    case "a":
      var audio2 = new Audio('sounds/tom-2.mp3')
      audio2.play();
      break;

    case "s":
      var audio3 = new Audio('sounds/tom-3.mp3')
      audio3.play();
      break;

    case "d":
      var audio4 = new Audio('sounds/tom-4.mp3')
      audio4.play();
      break;

    case "j":
      var audio5 = new Audio('sounds/kick-bass.mp3')
      audio5.play();
      break;

    case "k":
      var audio6 = new Audio('sounds/snare.mp3')
      audio6.play();
      break;

    case "l":
      var audio7 = new Audio('sounds/crash.mp3')
      audio7.play();
      break;

    default:
      console.log(drumInnerHtml);
  }

}



// FOR SHADOW EFFECT

function animation(currentkey){

   var activebutton= document.querySelector( "." + currentkey);
   activebutton.classList.toggle("pressed");

setTimeout(
function(){
  activebutton.classList.remove("pressed");
},100);


}
