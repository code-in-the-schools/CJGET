 var canvasWidth = 500, canvasHeight = 400;
 var ball, 
     ballSize    = 20;
     ball_xPos   = canvasWidth/2,
     ball_yPos   = canvasHeight/2,
	   ball_xVel   = 1,
     ball_yVel   = 1,
	   ball_top    = ball_yPos - ballSize/2,
	   ball_bottom = ball_yPos + ballSize/2,
	   ball_left   = ball_xPos - ballSize/2,
	   ball_right  = ball_xPos + ballSize/2;

var score = 0;
var score2= 0;
var score3= 0;
var score4= 0;

var player1Width   = 11,
    player1Height  = canvasHeight/6,
    player1Vel     = 7;
    player1_yPos   = canvasHeight / 2, 
    player1_xPos   =  ballSize,
    player1_top    = player1_yPos - player1Height/2,
	  player1_bottom = player1_yPos + player1Height/2,
	  player1_left   = player1_xPos + player1Width/2,
	  player1_right  = player1_xPos - player1Width/2;

var player2Width = 11,
    player2Height = canvasHeight/6,
    player2Vel = 7;
    player2_yPos = canvasHeight / 2,
    player2_xPos = canvasWidth - ballSize,
    player2_top    = player2_yPos - player2Height/2,
	  player2_bottom = player2_yPos + player2Height/2,
	  player2_left   = player2_xPos + player2Width/2,
	  player2_right  = player2_xPos - player2Width/2; 

var player3Width = 11,
    player3Height = canvasWidth/6,
    player3Vel = 7;

var player4Width = 11,
    player4Height = canvasWidth/6,
    player4Vel = 7;
    

function setup() {
   //background soccer field
  field= loadImage("https://th.bing.com/th/id/OIP.EjDqTUgUzAyYwbFAWLgEWgHaFH?pid=Api&rs=1");
	createCanvas(canvasWidth, canvasHeight);
 
  rectMode(CENTER);
  ball = rect(ball_xPos, ball_yPos, ballSize, ballSize);
}

function draw() {
	background(field);
	displayScores() ;
	// this makes the ball appear
 rect(ball_xPos, ball_yPos, ballSize, ballSize);
}



function displayScores() {
  fill("black");
  textSize(20);
  text("Score:",150,20);
  text("Score2:",250,20);
  text("Score3:",250,20);
  text("Score3:",250,20);
  text(score,150,40);
  text(score2,250,40);
  text(score3,250,40);
  text(score4,250,40);
}

function player() {
  fill(0);
  noStroke();
  rect(playerX, playerY, paddleWidth, 10);
  playerX = mouseX - paddleWidth / 2
  playerY = mouseY
}

function computer(){

}


function whoHitTheBall(){

}