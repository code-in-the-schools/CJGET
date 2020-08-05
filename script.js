
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

var goal1Width   = 11,
    goal1Height  = canvasHeight/6,
    goal1Vel     = 0;
    goal1_yPos   = canvasHeight / 2, 
    goal1_xPos   =  ballSize,
    goal1_top    = goal1_yPos - goal1Height/2,
	  goal1_bottom = goal1_yPos + goal1Height/2,
	  goal1_left   = goal1_xPos + goal1Width/2,
	  goal1_right  = goal1_xPos - goal1Width/2;

var goal2Width   = 11,
    goal2Height  = canvasHeight/6,
    goal2Vel     = 0;
    goal2_yPos   = canvasHeight / 2,
    goal2_xPos   = canvasWidth - ballSize,
    goal2_top    = goal2_yPos - goal2Height/2,
	  goal2_bottom = goal2_yPos + goal2Height/2,
	  goal2_left   = goal2_xPos + goal2Width/2,
	  goal2_right  = goal2_xPos - goal2Width/2; 

var player1Width = 11,
    player1Height = canvasWidth/6,
    player1Vel = 7;

var player2Width = 11,
    player2Height = canvasWidth/6,
    player2Vel = 7;
    

function setup() {
   //background soccer field
  field= loadImage("https://th.bing.com/th/id/OIP.EjDqTUgUzAyYwbFAWLgEWgHaFH?pid=Api&rs=1");
	createCanvas(canvasWidth, canvasHeight);
 
  rectMode(CENTER);
  ball = rect(ball_xPos, ball_yPos, ballSize, ballSize);
}

function draw() {
	background(field);
  rect(player1_xPos, player1_yPos, player1Width, player1Height);
 rect(player2_xPos, player2_yPos, player2Width, player2Height);
	displayScores() ;
	// this makes the ball appear
 rect(ball_xPos, ball_yPos, ballSize, ballSize);
}

function displayScores() {
  fill("black");
  textSize(20);
  text("Team1:",150,20);
  text("Team2:",255,20);
  text(score,170,40);
  text(score2,270,40);
}

function player() {
  fill(0);
  noStroke();
  rect(playerX, playerY, player1Width, 10);
  playerX = mouseX - player1Width / 2
  playerY = mouseY
}

function computer(){

}


function whoHitTheBall(){

}

function playersMove(){
  // player 1 can move by pressing keys 1-up, 2-down

  //player 2 can move by pressing keys 9-up, 0-down

  //player 3 can move by pressing keys w-up, s-down, a-left, d-right

  //player 4 can move by pressing arrow keys
}