var lenofbutton = document.querySelectorAll(".drum").length;

for(var i = 0;i<lenofbutton;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonn = this.innerHTML;
    makesound(buttonn);
    buttonAnimation(button);
  });
}


document.addEventListener("keypress",function(){
makesound(event.key);
buttonAnimation(event.key);
})


function makesound(key){


    switch (key) {
      case "w":
              var audio = new Audio("sounds/tom-1.mp3");
              audio.play();
                    break;

                    case "a":
                            var audio = new Audio("sounds/tom-2.mp3");
                            audio.play();
                                  break;


                                  case "s":
                                          var audio = new Audio("sounds/tom-3.mp3");
                                          audio.play();
                                                break;

                                                case "d":
                                                        var audio = new Audio("sounds/tom-4.mp3");
                                                        audio.play();
                                                              break;

                                                              case "j":
                                                                      var audio = new Audio("sounds/crash.mp3");
                                                                      audio.play();
                                                                            break;
                                                                            case "k":
                                                                                    var audio = new Audio("sounds/kick-bass.mp3");
                                                                                    audio.play();
                                                                                          break;
                                                                                          case "l":
                                                                                                  var audio = new Audio("sounds/snare.mp3");
                                                                                                  audio.play();
                                                                                                        break;
                                                                                                        default:

    }
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
function buttonAnimation(currentkey){
    var currentbutton = document.querySelector("."+currentkey);
    currentbutton.classList.add("pressed");

    setTimeout(function(){
      currentbutton.classList.remove("pressed");
    },100)
}
