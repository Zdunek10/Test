var paddle1, paddle2, ballV, ball;

var p1V, p2V;

function setup(){

	createCanvas(600, 500);

	paddle1 = Math.floor(Math.random() * 400) + 1; 
	paddle2 = Math.floor(Math.random() * 400) + 1;

	p1V = 0;
	p2V = 0;

	ball = createVector(width/2, height/2);
	ballV = createVector(random(-2,5), random(-2,5));


}

function draw(){

	background(50);


	//rysowanie paletek
	rect(10, paddle1, 20,100);
	rect(width-30, paddle2, 20, 100);


	ballx = height/2-10;
	bally = width/2-10;
	
	ellipse(ball.x,ball.y,20);


	paddle1 = constrain(paddle1,0,height-100);
	paddle2 = constrain(paddle2,0,height-100);

	//ball = constrain(ball.x,bal,height-100);



	handleMove();
	moveBall();
	//odbicie();
}


function moveBall(){


	if(ball.y> height - 20 || ball.y<0){
		ballV.y *= -1;
	}

	if(ball.x> width-20 || ball.x<0){
		ballV.x *= -1;

	}


	if(ball.x < 30){
		console.log("lewo");

		if(ball.x <paddle1 && ball.y>paddle1+100){
			console.log("odbicie");
		}

	}else if (ball.x> width - 30){
		console.log("prawo");
	}


	ball.x += ballV.x;
	ball.y += ballV.y



}

function handleMove(){

	//paddle1 control

	// move UP
	if(keyIsDown(87)){
		
		p1V-=5;

	}else if(keyIsDown(83)){
	// S - move down
		p1V+=5;
	}
	else if(keyIsDown(38)){
		//w move UP
		p2V-=5;
	
	}else if(keyIsDown(40)){
	// S - move down
		p2V+=5;
	}

	paddle1 = p1V;
	paddle2 = p2V;


	paddle1 = constrain(paddle1,0,height-100);
	paddle2 = constrain(paddle2,0,height-100);



}


function odbicie(){

	if(ball.y=paddle1.x){
		//console.log("asda");
	}


}

