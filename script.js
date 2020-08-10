var canvasWidth = 500, canvasHeight = 400;

var  ballSize    = 10,
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
    goal1_xPos   = ballSize + 10,
    goal1_top    = goal1_yPos - goal1Height/2,
	  goal1_bottom = goal1_yPos + goal1Height/2,
	  goal1_left   = goal1_xPos + goal1Width/2,
	  goal1_right  = goal1_xPos - goal1Width/2;

var goal2Width   = 6,
    goal2Height  = canvasHeight/6,
    goal2Vel     = 0;
    goal2_yPos   = canvasHeight / 2,
    goal2_xPos   = canvasWidth - ballSize - 10,
    goal2_top    = goal2_yPos - goal2Height/2,
	  goal2_bottom = goal2_yPos + goal2Height/2,
	  goal2_left   = goal2_xPos + goal2Width/2,
	  goal2_right  = goal2_xPos - goal2Width/2; 

var player1Width = 8,
    player1Height = canvasWidth/25,
    player1Vel = 7,
    player1_xPos  = 150,
    player1_yPos  = 200,
    player1_top    = player1_yPos - player1Height/2,
	  player1_bottom = player1_yPos + player1Height/2,
	  player1_left   = player1_xPos + player1Width/2,
	  player1_right  = player1_xPos - player1Width/2; 
    player1Color   = r=(255),g=(0), b=(250);

var player2Width  = 8,
    player2Height = canvasWidth/25,
    player2Vel    = 7,
    player2_xPos  = 350,
    player2_yPos  = 200,
    player2_top    = player2_yPos - player2Height/2,
	  player2_bottom = player2_yPos + player2Height/2,
	  player2_left   = player2_xPos + player2Width/2,
	  player2_right  = player2_xPos - player2Width/2,
    player2Color   = r=(255), g=(0), b=(0); 

// A sound file object
let cheering;    

// bubbles obstacles
let numBubbles = 13;
let jump = 0.05;
let gravity = 0.03;
let friction = -0.9;
let bubbles = [];


function setup() {
   //background soccer field
  field = loadImage("https://th.bing.com/th/id/OIP.EjDqTUgUzAyYwbFAWLgEWgHaFH?pid=Api&rs=1");
	createCanvas(canvasWidth, canvasHeight);
  // soccer ball image
  soccer = loadImage ("http://www.soccerwizards.com/wp-content/uploads/2018/02/roll-ball.gif", ball_xPos, ball_yPos, ballSize, ballSize,);
  player1 = loadImage(soc.png)
  player2 = loadImage(soc.png)
 // ball is in the center
  rectMode(CENTER);

  //bubbles fall loop
    for (let i = 0; i < numBubbles; i++) {
    bubles[i] = new Bubble(
      random(width),
      random(height),
      random(30, 70),
      i,
      bubbles
    );
  // ball is created and looks like a soccer ball 
  //ball= (soccer, ball_xPos, ball_yPos, ballSize, ballSize);
   // Load the cheering sound file.
  //cheering = loadSound( src="https://www.youtuberepeater.com/watch?v=barWV7RWkq0#gsc.tab=0" frameborder="0" allowfullscreen);
}

function draw() {
  //soccer field background
	background(field);

  //goalie1
 rect(goal1_xPos, goal1_yPos, goal1Width, goal1Height);
  //goalie2
 rect(goal2_xPos, goal2_yPos, goal2Width, goal2Height);

  //player2 and 1
 rect(player2_xPos, player2_yPos, player2Width, player2Height);
 rect(player1_xPos, player1_yPos, player1Width, player1Height);

 // calls functions
	displayScores();
  whoHitTheBall();
  playersMove();
  goalWasTouched();
  resetScore();
  ballMoves();
  soccer;
  player1Color();
  player2Color();
  loopObstacles();

  
	// this makes the ball appear
  soccer;
 //rect(ball_xPos, ball_yPos, ballSize, ballSize);
}

function ballMoves(){
  if ( (ball_right > canvasWidth) || (ball_left < 0) ) {
    ball_xVel = -ball_xVel;
    ball_xPos = canvasHeight/2;
    ball_yPos = canvasHeight/2;
  }
  if ( (ball_bottom > canvasHeight) || (ball_top < 0) ) {
		ball_yVel = -ball_yVel;
	}
}

function whoHitTheBall(){
//checks if a player hit the ball
  if((ball_bottom >= player1_top) && (ball_top <=    player1_bottom)){
		if(ball_left <=  player1_right){
    		ball_xVel = -ball_xVel;
    }else if (ball_left <=  player1_left){
    		ball_xVel = -ball_xVel;
  }  
  if((ball_bottom >= player2_top) && (ball_top <= player2_bottom)){
		if(ball_right >=  player2_left){
    		ball_xVel = -ball_xVel;
    }else if (ball_right >=  player2_right){
    		ball_xVel = -ball_xVel;
  }  
}

function playersMove(){
  if (keyIsDown(39)){
    player1_xPos = player1_xPos + 5;
    }else if (keyIsDown(37)){
    player1_xPos = player1_xPos - 5;
      }
if (keyIsDown(40)){
    player1_yPos = player1_yPos + 5;
    }else if (keyIsDown(38)){
    player1_yPos = player1_yPos - 5;
     }
if (keyIsDown(68)){
    player2_xPos = player2_xPos + 5;
  }else if (keyIsDown(65)){
    player2_xPos = player2_xPos - 5;
   }
if (keyIsDown(83)){
    player2_yPos = player2_yPos + 5;
  }else if (keyIsDown(87)){
    player2_yPos = player2_yPos - 5;
   }
}

function goalWasTouched(){
  //checks if ball hit goal1 adds point to team 2
  if((ball_bottom >= goal1_top) && (ball_top <= goal1_bottom)){
		if(ball_left <=  goal1_right){
    		ball_xVel = -ball_xVel;
        score = score + 1; 
        cheering.play();
      } else if (score =+ 0){
        cheering.stop();
      }
  }
  //checks if ball hit goal2 adds point to team 1
  	if((ball_bottom >= goal2_top) && (ball_top <= goal2_bottom)){
		if(ball_right >=  goal2_left){
    		ball_xVel = -ball_xVel;
	     score2 = score2 + 1;
       cheering.play();
      }else if (score2 =+ 0){
        cheering.stop();
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
 
function player1Color(){
  player1rgb= r = (250), g = (0), b = (0);
} 
function player2Color(){
  player2rgb= r=(0), g=(0), b=(250);
}

// by Gary
// function pause(){
  


function loopObstacles(){
  if (bubbles.y >= 393) {
    bubbles.y = 0;
    bubbles.x = randomNumber(15, 300);
 }
  if((score == 7) || (score2 == 7)){
    var bubbles = 20;
     if (player1.isTouching(bubbles)){
       score = score - 1;
       } else if (player2.isTouching(bubbles)){
       score2= score2 - 1;
     }
  }
}

let timer = 60
if (frameCount % 60 == 0 && timer > 0){
  
}
if timer = 0 { 
  text(¨ GAME OVER ¨, width/2 , hight*0.7)
}





