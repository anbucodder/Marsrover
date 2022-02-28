var rover_x,rover_y;
function add(){
    background_Tag = new Image();
    background_Tag.onload = uploadBackground;
    background_Tag.src = background_image;

    rover_Tag = new Image();
    rover_Tag.onload = uploadBackground;
    rover_Tag.src = background_image;
}

function uploadBackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover.width,rover.height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed =='38'){
        up();
        console.log("up");
    }
    if(keypressed =='40'){
        down();
        console.log("down");
    }
    if(keypressed =='37'){
        left();
        console.log("left");
    }
    if(keypressed =='39'){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y>=0){
        rover_y = rover_y-10;
        console.log ( "x position = "+rover_x+" | y position = "+rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y = rover_y+10;
        console.log ( "x position = "+rover_x+" | y position = "+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x = rover_x+10;
        console.log ( "x position = "+rover_x+" | y position = "+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x = rover_x-10;
        console.log ( "x position = "+rover_x+" | y position = "+rover_y);
        uploadBackground();
        uploadrover();
    }
}