var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var plays, player1, player2, player3, player4;
var obstaclesGroup,obstaclesGroup1;


var track, player1_img, player2_img, player3_img, player4_img, hurdle, invisibleGround1, invisibleGround2, invisibleGround3, invisibleGround4;

function preload(){
  hurdle = loadImage("hurdle.png");
  track = loadImage("track.jpg");
  player1_img = loadImage("player1.png");
  player2_img = loadImage("player2.png");
  player3_img = loadImage("player3.png");
  player4_img = loadImage("player4.png");
  ground = loadImage("ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth, window.innerHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  

}
