let jack;
let video;
let noseX = 0;
let noseY = 0;
let eyelX = 0;
let eyelY = 0;

function setup() {
  createCanvas(640, 480, WEBGL);
  jack = loadModel('Jack_Skellington.obj'), true;
  video = createCapture(VIDEO);
  //video.hide();
  console.log(ml5);
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses)
}

function draw() {
  background(175);

  image(video, 0, 0);
  
  let d = dist(noseX, noseY, eyelX, eyelY);
  console.log(d);
  
  fill(255,0,0);
  ellipse(noseX, noseY, d);

  normalMaterial();
  model(jack)
}

function gotPoses(poses) {
  //console.log(poses)
  if(poses.length > 0) {
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;
    let eX = poses[0].pose.keypoints[1].position.x;
    let eY = poses[0].pose.keypoints[1].position.y;
    
    noseX = lerp(noseX, nX, 0.5);
    noseY = lerp(noseY, nY, 0.5);
    eyelX = lerp(eyelX, eX, 0.5);
    eyelY = lerp(eyelY, eY, 0.5);
  }
  
}

function modelReady() {
}
