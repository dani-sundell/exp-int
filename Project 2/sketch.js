var burnMethods;
var booksToBurn;

function preload(){
	burnMethods = [
    "assets/match.png",
    "assets/lighter.png"
  ];
  booksToBurn = [
    "assets/1984.png",
    "assets/gatsby.png"
  ];
  bookFire = [
    "assets/bookfire1.png",
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
  image(BOOK, width - 324, height - 472); 
  image(FLAME, width - 170, height - 290); 

  //star
  push();
  translate(width/4.75, height/1.555);
  star(0, 0, 120, 160, 20);
  pop();

  fill(0);
  textStyle(NORMAL);
  textFont('brim-narrow');
  textSize(24);
  text('only', width/4.75, height/1.55 - 48);

  fill(bgColor);
  textFont('lisbeth-display');
  textSize(72);
  text('$99.99', width/4.75, height/1.55 + 24);

  fill(0);
  textFont('brim-narrow');
  textSize(16);
  text('per book', width/4.75, height/1.55 + 64);

  //number
  textAlign(RIGHT);
  fill(0);
  textFont('lisbeth-display');
  textSize(72);
  text('Call 1(800)SET-FIRE today!', width - 72, 72*2);


  //type
  textAlign(CENTER);
  textFont('brim-narrow');
  textSize(144);
  fill(0);
  textStyle(BOLD);
  text('We Burn Books!', width/2, height/2);

  fill(255);
  textStyle(NORMAL);
  text('We Burn Books!', width/2, height/2);
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
