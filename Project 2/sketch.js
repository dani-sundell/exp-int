var burnMethods;
var booksToBurn;
var amount;

function preload(){
	burnMethods = [
    "assets/match.png",
    "assets/lighter.png"
  ];
  booksToBurn = [
    "assets/bookstack1.png"
  ];
  bookFire = [
    "assets/bookfire2.png",
  ];

    //pick a random image
  	var randomMethod = floor(random(burnMethods.length));
    var randomBook = floor(random(booksToBurn.length));
    var randomFire = floor(random(bookFire.length));

  	FUEL = loadImage(burnMethods[randomMethod]);
    BOOK = loadImage(booksToBurn[randomBook]);
    FLAME = loadImage(bookFire[randomFire]);

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop;
  colorMode(HSB, 100);
  bgColor = color( random(100), 70, 60 );
}

function draw() {
  background(bgColor);
  //images
  image(FUEL, 0, 0); 
  BOOK.resize(0, 400);
  image(BOOK, width - 350, height - 420); 
  image(FLAME, width - 270, height - 290); 

  fill(0);
  //star
  push();
  translate(width/4.75, height/1.35);
  star(0, 0, 160, 200, 30);
  pop();

  fill(255);
  textStyle(NORMAL);
  textFont('brim-narrow');
  textSize(36);
  text('only', width/4.75, height/1.35 - 44);

  fill(bgColor);
  textFont('lisbeth-display');
  textSize(76);
  text('$99.99', width/4.75, height/1.35 + 32);

  fill(255);
  textFont('brim-narrow');
  textSize(28);
  text('per book', width/4.75, height/1.35 + 86);

  //number
  textAlign(RIGHT);
  fill(0);
  textFont('lisbeth-display');
  textSize(72);
  text('Call 1(800)SET-FIRE today!', width - 72, 72*2);


  //type
  textAlign(CENTER);
  textFont('pressio-compressed');
  textSize(330);
  fill(255);
  textStyle(BOLD);
  text('WE BURN BOOKS!', width/2, height/1.65);

  granulateRedShift(50);
}

function keyPressed() {
  if (keyCode === ENTER) {
    saveCanvas('myCanvas', 'png');
  }
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
