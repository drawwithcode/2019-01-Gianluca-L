function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(60);

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
  strokeWeight(1.5);
  translate((3*width)/4.25, height/2);



  stroke("red");
  line(0, 0, -(width/5)*(1-cos(frameCount*1)), (width/5)*sin(frameCount*1));

  stroke("orange");
  line(0, 0, -(width/5)*(1-cos(frameCount*1.2)), (width/5)*sin(frameCount*1.2));

  stroke("yellow");
  line(0, 0, -(width/5)*(1-cos(frameCount*1.4)), (width/5)*sin(frameCount*1.4));

  stroke("green");
  line(0, 0, -(width/5)*(1-cos(frameCount*1.6)), (width/5)*sin(frameCount*1.6));

  stroke(0, 255, 255)
  line(0, 0, -(width/5)*(1-cos(frameCount*1.8)), (width/5)*sin(frameCount*1.8));

  stroke("blue");
  line(0, 0, -(width/5)*(1-cos(frameCount*2.1)), (width/5)*sin(frameCount*2.1));

  stroke("violet");
  line(0, 0, -(width/5)*(1-cos(frameCount*2.3)), (width/5)*sin(frameCount*2.3));




  let a = 0.0;
  let inc = 2;
  for (let i = 0; i < 180; i++) {
    stroke("black")
    line(0, 0, -(width/5)*(1-cos(a)), (width/5)*sin(a));
    a = a + inc;
  }



/*stroke(
  lerpColor(
    color("aquamarine"),
    color("tomato"),
    frameCount / 120
  )
);*/
}
