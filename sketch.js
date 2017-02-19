function setup() {
  createCanvas(800,600);
  //background(255)
  noFill();
  angleMode(DEGREES);
  frameRate(12);
}

function draw() {
  translate(width/2,height/2);
  stroke(lerpColor(color(100),color(255),(frameCount%60)/60))
  line(200,0,200*sin(frameCount*3),200*cos(frameCount*3));
  line(-200,0,200*sin(frameCount*3),200*cos(frameCount*3));
}