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

var goal1Width   = 6,
    goal1Height  = canvasHeight/6,
    goal1Vel     = 0;
    goal1_yPos   = canvasHeight / 2, 
    goal1_xPos   =  ballSize,
    goal1_top    = goal1_yPos - goal1Height/2,
	  goal1_bottom = goal1_yPos + goal1Height/2,
	  goal1_left   = goal1_xPos + goal1Width/2,
	  goal1_right  = goal1_xPos - goal1Width/2;

var goal2Width   = 6,
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
    player1_top    = player1_yPos - player1Height/2,
	  player1_bottom = player1_yPos + player1Height/2,
	  player1_left   = player1_xPos + player1Width/2,
	  player1_right  = player1_xPos - player1Width/2; 


var player2Width  = 11,
    player2Height = canvasWidth/10,
    player2Vel    = 7,
    player2_xPos  = 150,
    player2_yPos  = 200,
    player2_top    = player2_yPos - player2Height/2,
	  player2_bottom = player2_yPos + player2Height/2,
	  player2_left   = player2_xPos + player2Width/2,
	  player2_right  = player2_xPos - player2Width/2; 
    

function setup() {
   //background soccer field
  field= loadImage("https://th.bing.com/th/id/OIP.EjDqTUgUzAyYwbFAWLgEWgHaFH?pid=Api&rs=1");
	createCanvas(canvasWidth, canvasHeight);
 // ball is in the center
  rectMode(CENTER);
  // ball is created and looks like a soccer ball 
  ball = rect(ball_xPos, ball_yPos, ballSize, ballSize);
}

function draw() {
  //soccer field background
	background(field);

  //goalie1
  rect(goal1_xPos, goal1_yPos, goal1Width, goal1Height);
  //goalie2
 rect(goal2_xPos, goal2_yPos, goal2Width, goal2Height);

  //player2 and 1
 rect(player2_xPos, player2_yPos, ballSize, ballSize);
 rect(player1_xPos, player1_yPos. ballSize, ballSize);

 // calls functions
	displayScores();
  whoHitTheBall();
  playersMove();
  goalWasTouched();
  resetScore();
  
	// this makes the ball appear
 rect(ball_xPos, ball_yPos, ballSize, ballSize);
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
//checks if a player hit the ball
  if((ball_bottom >= player1_top) && (ball_top <=    player1_bottom)){
		if(ball_left <=  player1_right){
    		ball_xVel = -ball_xVel;
    }
  }  
  if((ball_bottom >= player2_top) && (ball_top <= player2_bottom)){
		if(ball_right >=  player2_left){
    		ball_xVel = -ball_xVel;
    }
  }  
}

function playersMove(){
  //player 1 can move by pressing keys w-up, s-down, a-left, d-right

  //player 2 can move by pressing arrow keys
}

function goalWasTouched(){
  
  //checks if ball hit goal1 adds point to team 2
  if((ball_bottom >= goal1_top) && (ball_top <= goal1_bottom)){
		if(ball_left <=  goal1_right){
    		ball_xVel = -ball_xVel;
        score = score + 1; 
      } 
  }
  //checks if ball hit goal2 adds point to team 1
  	if((ball_bottom >= goal2_top) && (ball_top <= goal2_bottom)){
		if(ball_right >=  goal2_left){
    		ball_xVel = -ball_xVel;
	     score2 = score2 + 1;
       <iframe width="0" height="0" src="https://www.youtuberepeater.com/watch?v=barWV7RWkq0#gsc.tab=0" frameborder="0" allowfullscreen></iframe>
      }
    }  
}
function displayScores() {
  fill("black");
  textSize(20);
  // name of players teams and scores positioned/displayed
  text("Team1:",150,20);
  text("Team2:",255,20);
  text(score,170,40);
  text(score2,270,40);
}
function resetScore(){
  if(score == 10 || score2 == 10){
    score  =+ 0;
    score2 =+ 0;
  }
}