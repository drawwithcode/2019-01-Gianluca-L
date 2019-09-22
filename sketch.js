function preload(){
  // put preload code here

}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background("black");
  angleMode(DEGREES);
  frameRate(60);
  r = width/6;

  s = 60; // 1 second

}

function draw() {



  //background("black");


  translate(2*width/3, height/2);


  //stroke("red");
  //line(-r*(1-cos(frameCount*1)), r*sin(frameCount*1), 0, 0);

  /*stroke("orange");
  line(-r*(1-cos(frameCount*1.2)), r*sin(frameCount*1.2), 0, 0);

  stroke("yellow");
  line(-r*(1-cos(frameCount*1.4)), r*sin(frameCount*1.4), 0, 0);

  stroke("green");
  line(-r*(1-cos(frameCount*1.6)), r*sin(frameCount*1.6), 0, 0);

  stroke(0, 255, 255);
  line(-r*(1-cos(frameCount*1.8)), r*sin(frameCount*1.8), 0, 0);

  stroke("blue");
  line(-r*(1-cos(frameCount*2.1)), r*sin(frameCount*2.1), 0, 0);

  stroke("violet");
  line(-r*(1-cos(frameCount*2.3)), r*sin(frameCount*2.3), 0, 0);*/


  //background("black");

  if (frameCount > 2*s && frameCount < 4*s ) {
    strokeWeight(2.5);
    stroke("black");
    line(0, 0, -r*(1-cos(frameCount*3)), r*sin(frameCount*3));
  };
  if (frameCount < 2*s) {

    strokeWeight(1.5);
    stroke("green");
    line(0, 0, -r*(1-cos(frameCount*3)), r*sin(frameCount*3));
  };


  /*stroke("green");
  strokeWeight(1.5);
  for (i = 0; i < 360; i+=2) {
    line(0, 0, -r*(1-cos(i)), r*sin(i))
  };*/















/*stroke(
  lerpColor(
    color("aquamarine"),
    color("tomato"),
    frameCount / 120
  )
);*/
}
