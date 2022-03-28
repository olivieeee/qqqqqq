var iniciar=1;
var perdeu=0;
var garoto, garotocorrendo, garotocolidindo;
var fundoimagem, fundoimg;
var nuvensGroup, nuvens1, nuvens2;
var obstaculo, obstaculo1; 
var gameState=iniciar;
var pontuação;
var rejogarImg, gameoverimg;
var pulandoSom, checkPointSom, morreuSom;

function preload(){
fundoimagem=loadImage("fundo.png")
garotocorrendo=loadAnimation("correndo 1.png","correndo 2.png","pulando.png")
garotocolidindo=loadImage("perdeu.png")
obstaculo1=loadAnimation("obstaculo01.png","obstaculoso2.png","obstaculos03.png","obstaculos04.png")
obstaculo2=loadAnimation("verde1.png, verde2.png, verde3.png, verde4.png")
nuvem1=loadImage("nuvens 1.png")
nuvem2=LoadImage("nuvens 2.png")
pulandoSom=loadSound("hammer.mp3")
checkPointSom=loadSound("zelda-fairy.mp3")
morreuSom=loadSound("fireworks.mp3")
rejogarImg=("reset.png")
gameoverimg=("gameover.png")

}
function setup() {
createCanvas(600,600);




}

function draw() {
 drawnsprites();
}