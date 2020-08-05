 var canvasWidth = 400, canvasHeight = 400;
 var ballSize    = 20;
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
var player1Width = 11,
    player1Height = canvasHeight/6,
    player1Vel = 7;
    
var player2Width = 11,
    player2Height = canvasHeight/6,
    player2Vel = 7;

var player3Width = 11,
    player3Height = canvasWidth/6,
    player3Vel = 7;

var player4Width = 11,
    player4Height = canvasWidth/6,
    player4Vel = 7;

function setup() {
   //background soccer field
  field=("https://th.bing.com/th/id/OIP.EjDqTUgUzAyYwbFAWLgEWgHaFH?pid=Api&rs=1");
	createCanvas(canvasWidth, canvasHeight);
 
  rectMode(CENTER);
  myBall = rect(myBall_xPos, myBall_yPos, ballSize, ballSize);
}

function draw() {
	background(field);
	displayScores() ;
	// this makes the ball appear
 rect(myBall_xPos, myBall_yPos, ballSize, ballSize);
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

fun