//RESPOND TO ARROW KEY INPUT (ASCII 37-40 for arrows)
window.addEventListener('keydown', move);

//GLOBAL VARIABLES
const backgroundColor = "#00CDEF";
const windowX = window.innerWidth;
const windowY = window.innerHeight;
//booleans
//Rectangles
const r1 = document.getElementById("rect1");

//integers
var i = 0, j = 0, k = 0;
var hexColor = 0;
var hexValue;
var max = 0, maxIndex = 0;
var x = 25, y = 0;
var frame = 0, interval = 150;
//date
var date = new Date();
//DATA

var colors = ["#FFFFFF", "#BEFFBE", "#66FF99","#33FF88","#33FF55", "#00CD50","#00C050","#00C038","#009933", "#006622", "#002200"];

//FUNCTION DEFINITIONS
function move(key) {
  //RESTART
  if (key.keyCode == 81 || key.keyCode == 27) {
    restart();
  }//close if
} //close move function

function restart() {
  //clear screen
  //Re-intialize variables
  //run game loop
  animate();
} //close function restart



function startScreen(){
}//close function strat screen

function animate() {
  frame++;

  if (frame == 10 ){
    document.getElementById("turtleDiv").innerHTML = getTurtle() ;
  }//close if frame is equal to
  if (frame == 20 ){
    document.getElementById("turtleDiv").innerHTML = getColoredTurtle( colors[0] ) ;
  }//close if frame is equal to
  if (frame == 30 ){
    document.getElementById("turtleDiv").innerHTML = getColoredTurtle( colors[1] ) ;
  }//close if frame is equal to
  if (frame == 40 ){
    document.getElementById("turtleDiv").innerHTML = getColoredTurtle( colors[2] ) ;
  }//close if frame is equal to
  if (frame == 50 ){
    document.getElementById("turtleDiv").innerHTML = getColoredTurtle( colors[3] ) ;
  }//close if frame is equal to
  if (frame == 60 ){
    document.getElementById("turtleDiv").innerHTML = getColoredTurtle( colors[4] ) ;
  }//close if frame is equal to
  if (frame == 70 ){
    document.getElementById("turtleDiv").innerHTML = getColoredTurtle( colors[5] ) ;
  }//close if frame is equal to
  if (frame == 80 ){
    document.getElementById("turtleDiv").innerHTML = getColoredTurtle( colors[6] ) ;
  }//close if frame is equal to
  if (frame == 90 ){
    document.getElementById("turtleDiv").innerHTML = getColoredTurtle( colors[7] ) ;
  }//close if frame is equal to
  if (frame == 100 ){
    document.getElementById("turtleDiv").innerHTML = getColoredTurtle( colors[8] ) ;
  }//close if frame is equal to
  if (frame == 110 ){
    document.getElementById("turtleDiv").innerHTML = getColoredTurtle( colors[9] ) ;
  }//close if frame is equal to
  if (frame == 120 ){
    document.getElementById("turtleDiv").innerHTML = getColoredTurtle( colors[10] ) ;
  }//close if frame is equal to
  if (frame == 130 ){
    document.getElementById("turtleDiv").innerHTML = getColoredTurtle( colors[11] ) ;
  }//close if frame is equal to
  //RESET
  if (frame == 140){
    frame = 0;
  }//close reset frame counter if 200
  
  console.log("frame = " + frame);
  requestAnimationFrame(animate);
    
} //close function play tic tac toe

//CODE TO BE EXECUTED
animate();
