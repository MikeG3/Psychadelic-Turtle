// var bg = document.getElementsByTagName("body")[0];
var bgr = 0, bgg = 0, bgb= 0;

function updateBGColors(){
    bgr += 9; 
    bgg += 7; 
    bgb += 3;
    bgr %= 255; 
    bgg %= 255; 
    bgb %= 255;
}//close functiong

function getBGColor(){
    updateBGColors();
    return "rgb(" + bgr + ","+ bgg + "," + bgb +")";
}

function changeBackgroundColor(){
    document.body.style.backgroundColor = getBGColor();
}//close function