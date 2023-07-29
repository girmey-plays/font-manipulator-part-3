leftWristX=0;
rightWristX=0;
difference=0;


function setup()
{

video = createCapture(VIDEO);
video.size(500, 500);

canvas = createCanvas(500, 500);
canvas.position(550, 150);

poseNet = ml5.poseNet(video, modelloaded);
poseNet.on("pose",gotposes);

}

function draw()
{

background("#FFFF00");

document.getElementById("text").innerHTML = "width and height of the text will be ="+difference+"px";
textSize(difference);
text("krutarth",250 , 250);

}

function modelloaded()
{

console.log("poseNet is initialised");

}

function gotposes(results)
{

if(results.length>0)
{

console.log(results);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);

}

}