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
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  e = 0;
  f = 0;
}

function draw() {

  translate(2*width/3, height/2);

  if (frameCount > 2*s && frameCount < 4*s ) {
    strokeWeight(2.5);
    stroke("black");
    line(0, 0, -r*(1-cos(frameCount*3)), r*sin(frameCount*3));
  };
  if (frameCount < 2*s) {

    strokeWeight(1.5);
    stroke("red");
    line(0, 0, -r*(1-cos(frameCount*3)), r*sin(frameCount*3));
  };

  // Inside


  if (frameCount > 10*s && f < 360) {
    f += 3;
    strokeWeight(1);
    line( -r/2 -r*(1-cos(f + 90))/2, r*sin(f + 90)/2, -r/2 -r*(1-cos(f + 200))/2, r*sin(f + 200)/2);
  };

  if (frameCount > 7*s && e < 360) {
    e += 2;
    line( -r*(1-cos(e - 4)), r*sin(e - 4), -r*(1-cos(e + 110)), r*sin(e + 110));
  };


  if (frameCount > 4*s && a < 360) {
    a += 2;
    b += 2;
    c += 2;
    d += 2;
    //arc(-r, 0, 2*r, 2*r, 0, a, HALF_PI);


    if (a < 90) {
      fill("black")
      stroke("black");
      rect(-r, 0, width/2, height/2);
      // down right
      stroke("red");
      //arc(-r, 0, 2*r, 2*r, 0, a, HALF_PI)
      line(width/3, height/2, -r*(1-cos(a)), r*sin(a));
    }
    if (b > 90 && b < 180) {
      // down left
      fill("black")
      stroke("black");
      rect(-r -width/2, 0, width/2, height/2);
      stroke("red");
      //arc(-r, 0, 2*r, 2*r, 90, a, HALF_PI)
      line(-r - width/2, height/2, -r*(1-cos(b)), r*sin(b));
    }
    if (c > 180 && c < 270) {
      // up left
      fill("black")
      stroke("black");
      rect(-r -width/2, -height/2, width/2, height/2);
      stroke("red");
      //arc(-r, 0, 2*r, 2*r, 180, a, HALF_PI)
      line(-r - width/2, -height/2, -r*(1-cos(c)), r*sin(c));
    }
    if (d > 270 && d < 360) {
      // up right
      fill("black")
      stroke("black");
      rect(-r, 0, width/2, -height/2);
      stroke("red");
      //arc(-r, 0, 2*r, 2*r, 270, a, HALF_PI)
      line(width/3, -height/2, -r*(1-cos(d)), r*sin(d));
    }
    arc(-r, 0, 2*r, 2*r, 0, a, HALF_PI);
    noFill();
  }





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
