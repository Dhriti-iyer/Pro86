var canvas= new fabric.Canvas("myCanvas");

var player_x=10;
var player_y=10;
var block_img_height=30;
var block_img_width=30;
var player_object="";
var block_img_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}
function new_img(get_img)
{
    fabric.Image.fromURL(get_img,function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height );
        block_img_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_img_object);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey== true && keypressed=='80')
    {
        console.log("shift and p pressed together");
        block_img_width= block_img_width + 10;
        block_img_height= block_img_height + 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(e.shiftKey== true && keypressed=='77')
    {
        console.log("shift and m pressed together");
        block_img_width= block_img_width - 10;
        block_img_height= block_img_height - 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(keypressed=='37')
    {
        console.log("left key is pressed");
        left();
    }
    if(keypressed=='38')
    {
        console.log("up key is pressed");
        up();
    }
    if(keypressed=='39')
    {
        console.log("right key is pressed");
        right();
    }
    if(keypressed=='40')
    {
        console.log("down key is pressed");
        down();
    }
    if(keypressed=='76')
    {
        console.log("l key is pressed");
        new_img('captain_america_left_hand.png');
    }
    if(keypressed=='82')
    {
        console.log("r key is pressed");
        new_img('thor_right_hand.png');
    }
    if(keypressed=='66')
    {
        console.log("b key is pressed");
        new_img('spiderman_body.png');
    }
    if(keypressed=='73')
    {
        console.log("i key is pressed");
        new_img('ironman_legs.png');
    }
    if(keypressed=='70')
    {
        console.log("f key is pressed");
        new_img('hulk_face.png');
    }
}
function up()
{
    if (player_y>=0)
    {
        player_y=player_y -block_img_height;
        console.log("when up arrow key is pressed x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if (player_y<=550)
    {
        player_y=player_y + block_img_height;
        console.log("when down arrow key is pressed x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if (player_x<=900)
    {
        player_x=player_x + block_img_width;
        console.log("when right arrow key is pressed x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if (player_x>=0)
    {
        player_x=player_x - block_img_width;
        console.log("when left arrow key is pressed x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}