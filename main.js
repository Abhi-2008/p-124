noseX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)
    canvas = createCanvas(400, 400);
    canvas.position(560, 150);
    poseNet = ml5.poseNet('video', modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('posenet is Initiallized!');
}

function gotPoses(results) {
    console.log(results);
}