//FILE TO DISPLAY THE TITLE

var red = 0, green = 0, blue = 0;

const letters = ["t1","t2","t3","t4","t5","t6","t7","t8","t9","t10","t11","t12","t13","t14","t15","t16","t17"];

function updateColors(){
    red += 1;
    blue += 3;
    green +=5;
    red %= 255;
    blue %= 255;
    green %=255;
}//close function update colors

function animateTitle(){
    for (let i = 0 ; i < letters.length ; i++ ){
        updateColors();
        console.log( document.getElementById(letters[i]) );
        let color = 'rgb(' + red + ',' + blue + ',' + green + ')';
        document.getElementById(letters[i]).style.color = color;
    }//close for each letter

}//close function animate title