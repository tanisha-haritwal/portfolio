nose_x=0;
nose_y=0;
function preload(){
moustache=loadImage('https://i.postimg.cc/L4BCjkK1/m.png');
}

function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
image(video,0,0,640,480);
image(moustache, nose_x, nose_y+20, 250, 100);
}
    
function take_snapshot(){
save('clown_nose_img.jpg');
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
console.log("nose_x =" + results[0].pose.nose.x);
console.log("nose_y =" + results[0].pose.nose.y);
nose_x=results[0].pose.nose.x;
nose_y=results[0].pose.nose.y;
}
}

function modelLoaded(){
console.log('modelLoaded');
}