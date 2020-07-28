//RESPOND TO ARROW KEY INPUT (ASCII 37-40 for arrows)
window.addEventListener('keydown', move);

//GLOBAL VARIABLES
const backgroundColor = "#00CDEF";
const windowX = window.innerWidth;
const windowY =window.innerHeight;
//booleans
//Rectangles
const r1 = document.querySelector("#rect1");
const turtle = document.getElementsByClassName("turtle");
//const svg = document.getElementsByTagName("svg");

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

var colors = ["#BEFFBE", "#66FF99","#33FF88","#33FF55", "#00CC44","#009933", "#006622"];

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
  if (frame > 100){
    //r1.setAttribute.colors;
    let t = document.querySelectorAll;
    t.style.fill = "#454545";
  }//close if frame is over 100 update color
  
  if (frame == 200){
    frame = 0;
  }//close reset frame counter if 200
  console.log(frame);
  requestAnimationFrame(animate);
    
} //close function play tic tac toe

//CODE TO BE EXECUTED
animate();
