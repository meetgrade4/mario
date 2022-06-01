img = "";
noseX = 0;
noseY = 0;
marioX = 350;
marioY = 350;

function preload() {
	img = loadImage("mario01.png");
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kill = loadSound("kick.wav");
	mario_coin = loadSound("coin.wav");
	mario_over = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('webcam');
	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotResults);
}

function modelLoaded(){
	console.log("model loaded");
}

function gotResults(results){
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
	console.log(noseX, noseY, results);
}

function draw() {
	game();
}



