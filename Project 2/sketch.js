var amount;
var colorCharcoal = "#161E1E";
var colorSmoke = "#2B3B3C";
var colorKindling = "#C9994B";
var colorBlaze = "#DD663E";
var colorRoast = "#A25133";
var colorBurnt = "#663B28";
var colorAsh = "#F7EEE3";

function preload(){
  FUEL = loadImage("assets/lighter.png");
  BOOK = loadImage("assets/reader.png");
  CIG = loadImage("assets/cigarette.png");
  MATCH = loadImage("assets/matchbox-img.png");
  LIGHTER = loadImage("assets/lighter-2.png");
  LOGO = loadImage("assets/logobook.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop;
}

function draw() {
  clear();
  background(220, 10);
  blendMode(MULTIPLY);
  noStroke();

  // START logo
/*
  LOGO.resize(400,0);
  image(LOGO, 600, 350);
  fire();

  erase();
  translate(400, 310);
  scale(0.5);
  fire();
  noErase(); 
  */
  // END logo

// START logo + img

/*   BOOK.resize(250,0);
  image(BOOK, 610, 140);
  fire(colorBlaze);

  erase();
  translate(400, 310);
  scale(0.5);
  fire(colorBlaze);
  noErase();  */
 
  // END logo + img

  // START image with star
  /* image(FUEL, 730, 280);

  fill(colorBurnt);

  //star
  push();
  translate(800, 400);
  star(0, 0, 80, 100, 12);
  pop();

  erase();
  textAlign(CENTER);
  textStyle(NORMAL);
  textFont('lisbeth-display');
  textSize(24);
  text('GET A', 800, 400 - 32);

  textFont('pressio-compressed');
  textSize(56);
  text('FREE', 800, 400 + 20);

  textFont('lisbeth-display');
  textSize(24);
  text('QUOTE', 800, 400 + 50);
  noErase(); */
 // END image with star

  // START CIG
/*   CIG.resize(300,0);
  image(CIG, 650, 340);

  fill(colorAsh);

  //star
  push();
  translate(800, 400);
  star(0, 0, 70, 80, 30);
  pop(); */
 // END CIG

  // START MATCH
/*   MATCH.resize(300,0);
  image(MATCH, 675, 320);

  fill(colorBlaze);

  //star
  push();
  translate(800, 400);
  star(0, 0, 70, 80, 30);
  pop(); */
// END MATCH

// START LIGHTER
  LIGHTER.resize(300,0);
  image(LIGHTER, 680, 220);

  fill(colorKindling);

  //star
  push();
  translate(800, 400);
  star(0, 0, 70, 80, 30);
  pop();
// END LIGHTER

  granulateRedShift(20);
  // grid();

}

function keyPressed() {
  if (keyCode === ENTER) {
    saveCanvas('myCanvas', 'png');
  }
}

function grid() {
  for (let x=0;x<width;x+=50){
    for (let y=0;y<height;y+=50){
      stroke('rgba(0,0,0,.25)');
      fill('rgba(0,0,0,.25)');
   		rect(x,y,50,50); 
      fill('rgba(0,0,0,.85)');
      noStroke();
      textSize(8);
      text(x + ',' + y, x, y);
    }
  }
}

function fire(colorName) {
  fill(colorName);
  beginShape();
  vertex(775, 250); //start shape
  bezierVertex(  //top right curve
    800, 250, 
    845, 300, 
    875, 350 /* origin point*/
    );
  bezierVertex( //bottom right curve
    975, 500, 
    900, 600, 
    800, 600 /* origin point*/
    ); 
  bezierVertex( //left curve
    700, 600, /* bottom of curve */
    625, 475, /* top of curve */
    750, 350 /* origin point*/
    ); 
    bezierVertex(
    750, 350, 
    800, 300, 
    775, 250 /* origin point*/
    ); 
  endShape(CLOSE)
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function granulateRedShift(amount) {
  loadPixels();
  const d = pixelDensity();
  const pixelsCount = 4 * (width * d) * (height * d);
  for (let i = 0; i < pixelsCount; i += 4) {
      pixels[i] = pixels[i] + amount;
      pixels[i+1] = pixels[i+1] + random(-amount, amount);
      pixels[i+2] = pixels[i+2] + random(-amount*2, amount*2);
      // comment in, if you want to granulate the alpha value
      // pixels[i+3] = pixels[i+3] + random(-amount*2, amount*2);
  }
  updatePixels();
}
