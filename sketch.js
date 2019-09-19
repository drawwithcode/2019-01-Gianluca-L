function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  //frameRate(12);

}

function draw() {
  // put drawing code here
  //translate(width/2, height/2);
  //line(width/4, height/2, (3*width)/4, height/2);
  /*translate((3*width)/4, height/2);
  rotate (frameCount*3)


  line(-frameCount*10, frameCount*10, 0, 0);
  strokeWeight(2);

  if (frameCount == 60) {
    noLoop();
  }*/
  translate((3*width)/4, height/2);
   let a = 0.0;
let inc = 2;
for (let i = 0; i < 180; i++) {
  line(0, 0, -(width/4)*(1-cos(a)), (width/4)*sin(a));
  a = a + inc;
}
}
