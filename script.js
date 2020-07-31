//MAIN ANIMATION SCRIPT 

//GLOBAL VARIABLES
const backgroundColor = "#00CDEF";
const windowX = window.innerWidth;
const windowY = window.innerHeight;

//integers
var i = 0;
var frame = 0;


function animate() {
  frame++;
  if (frame%9==0){
    animateTitle();
  }//close animate title if mod 10
  if (frame%20==0){
    document.getElementById("turtleDiv").innerHTML = colorTurtle() ;
  }//close animate title if mod 10
  
  //RESET
  if (frame == 256){
    frame = 0;
  }//close reset frame counter if 200
  
  console.log("frame = " + frame);
  requestAnimationFrame(animate);
    
} //close function play tic tac toe

//CODE TO BE EXECUTED
animate();
