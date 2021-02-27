
var last_position_of_x, last_position_of_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color = "black";
line_width=5;


width= screen.width;
new_width=width - 70;
new_height= screen.height-300;

if(width<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";


}





canvas.addEventListener("touchstart", my_touch_start);
function my_touch_start(e){
    color = document.getElementById("color").value;
    line_width= document.getElementById("width").value;
last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", touch_move);
function touch_move(e){
console.log("Touch Start");
current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
current_position_of_y=e.touches[0].clientY-canvas.offsetTop;  




ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=line_width;
 


console.log("Last Position Of the");
console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);

console.log("Current Position Of The");
console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
ctx.lineTo(current_position_of_x,current_position_of_y);

ctx.stroke();


last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;
}

function cleararea(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}