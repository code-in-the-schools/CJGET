 var canvasWidth = 400, canvasHeight = 400;

 ballSize = 20;
var myBall_xPos = canvasWidth/2,
    myBall_yPos = canvasHeight/2,
	  myBall_xVel = 1,
    myBall_yVel = 1,
	  myBall_top    = myBall_yPos - ballSize/2,
	  myBall_bottom = myBall_yPos + ballSize/2,
	  myBall_left   = myBall_xPos - ballSize/2,
	  myBall_right  = myBall_xPos + ballSize/2;

var score = 0;
var score2= 0;
var score3= 0;
var score4= 0;


function setup() {
	createCanvas(canvasWidth, canvasHeight);
  //background soccer field
  field("");
  rectMode(CENTER);
  myBall = rect(myBall_xPos, myBall_yPos, ballSize, ballSize);
}

function draw() {
	background(field);
	
	// thing you move
	fill(0, 255, 0);
	ellipse(mouseX, mouseY, 50);
	
	// big wheel
	fill(255);
	ellipse(350, 250, 100);
	
	// weird moving line
	fill(0);
	strokeCap(ROUND);
	line(mouseX, mouseY, xrot+50, yrot+45);
	
	// make it spin
	xrot += Math.cos((PI/2) * t) * 8;
	yrot += Math.sin((PI/2) * t) * 8;
	t += 0.1;
}



function displayScores() {
  fill("white");
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