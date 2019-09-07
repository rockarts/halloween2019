let jack;

function setup() {
  createCanvas(400, 400, WEBGL);
  jack = loadModel('Jack_Skellington.obj');
}

function draw() {
  background(175);
  model(jack)
}