//variables
var player;
var playerStandingUp_Img, playerStandingDown_Img, playerStandingLeft_Img, playerStandingRight_img;
var playerWalkingUp_anim, playerWalkingDown_anim, playerWalkingLeft_anim, playerWalkingRight_anim;

function preload(){
playerStandingUp_Img = loadImage("Assets/Muñeco/Muñeco parado arriba.png");
playerStandingDown_Img = loadImage("Assets/Muñeco/Muñeco parado.png");
playerStandingLeft_Img = loadImage("Assets/Muñeco/Muñeco parado izquierda.png");
playerStandingRight_img = loadImage("Assets/Muñeco/Muñeco parado derecha.png");

playerWalkingUp_anim = loadAnimation("Assets/Muñeco/Muñeco caminando arriba 1.png", "Assets/Muñeco/Muñeco parado arriba.png", "Assets/Muñeco/Muñeco caminando arriba 2.png");
playerWalkingDown_anim = loadAnimation("Assets/Muñeco/Muñeco caminando abajo 1.png", "Assets/Muñeco/Muñeco parado.png", "Assets/Muñeco/Muñeco caminando abajo 2.png");
playerWalkingLeft_anim = loadAnimation("Assets/Muñeco/Muñeco caminando izquierda 1.png", "Assets/Muñeco/Muñeco parado izquierda.png", "Assets/Muñeco/Muñeco caminando izquierda 2.png");
playerWalkingRight_anim = loadAnimation("Assets/Muñeco/Muñeco caminando derecha 1.png", "Assets/Muñeco/Muñeco parado derecha.png", "Assets/Muñeco/Muñeco caminando derecha 2.png");
}

function setup(){
createCanvas(windowWidth, windowHeight);

player = createSprite(width/2, height/2, 50, 50);
player.addImage(playerStandingDown_Img);
player.scale = 0.25;
}

function draw(){
 background(50);

 if(keyIsDown(RIGHT_ARROW)){
player.x += 5;
player.changeAnimation("playerWalkingRight_anim", playerWalkingRight_anim);
 }


drawSprites();
}

