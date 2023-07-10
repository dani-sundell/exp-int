/* 
GRAIN
  source: https://www.fxhash.xyz/article/all-about-that-grain
CURVES
  source: https://programmingdesignsystems.com/shape/custom-shapes/index.html
IMAGES
  source: https://commons.wikimedia.org/
*/

var amount;

// Colors
var colorCharcoal = "#161E1E";
var colorSmoke = "#2B3B3C";
var colorKindling = "#C9994B";
var colorBlaze = "#DD663E";
var colorRoast = "#A25133";
var colorBurnt = "#663B28";
var colorAsh = "#F7EEE3";

// Type
var typefaceH1 = 'pressio-compressed';
var typefaceH2 = 'cabazon';

function preload(){
  FUEL = loadImage("assets/lighter.png");
  BOOK = loadImage("assets/reader.png");
  CIG = loadImage("assets/cigarette.png");
  MATCH = loadImage("assets/matchbox-img.png");
  LIGHTER = loadImage("assets/lighter-2.png");
  LOGO = loadImage("assets/logobook.png");
  MOLOTOV = loadImage("assets/molotov.png");
  CERT = loadImage("assets/cert-frame.png");
  URN = loadImage("assets/book-ashes.png");
  CAMERA = loadImage("assets/camera.png");
  KEG = loadImage("assets/powder-keg.png");
  GAS = loadImage("assets/gasoline.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);
  pixelDensity(2.0);
  noLoop;
}

function draw() {
  clear();
  background(220, 10);
  blendMode(MULTIPLY);
  noStroke();

/* ------------------------- ↓ Drawings ↓ ------------------------- */

  /* FIXED • DON'T CHANGE */
  
    // drawLogo(colorBlaze);
    // drawBook(colorBlaze);

  /* MODULAR • EDIT */

    /* Drawing Options:
      drawStarThirtyLg
      drawStarThirty
      drawStarTwelve
      drawStamp */

      drawStarThirtyLg(
      colorAsh, 
      lineOne = '', 
      lineTwo = '', 
      lineThree = '', 
      imgShow = true, 
      imgChoice = LOGO
      );

/* --------------------- ↓ Support functions ↓ ----------------------- */
  granulateRedShift(20);
  // grid();
}

/* ---------------------- ↓ Nested Functions ↓ ----------------------- */

  /* FIXED */

    function drawLogo(colorName) {
      LOGO.resize(400,0);
      image(LOGO, 600, 350);
      drawFire(colorName);

      erase();
      push();
      translate(400, 310);
      scale(0.5);
      drawFire(colorName);
      pop();
      noErase(); 
    }

    function drawBook(colorName) {
      BOOK.resize(250,0);
      image(BOOK, 610, 140);
      drawFire(colorName);

      erase();
      translate(400, 310);
      scale(0.5);
      drawFire(colorName);
      noErase(); 
    }

    function drawFire(colorName) {
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
      endShape(CLOSE);
    }

  /* MODULAR */

    function drawStarTwelve(colorName, lineOne, lineTwo, lineThree, imgShow, imgChoice) {
      fill(colorName);

      showImage(imgShow, imgChoice);

      //star
      push();
      translate(800, 400);
      star(0, 0, 70, 80, 12);
      pop();

      erase();
      typeStack();
      noErase();
    }

    function drawStarThirty(colorName, lineOne, lineTwo, lineThree, imgShow, imgChoice) {
      fill(colorName);

      showImage(imgShow, imgChoice);

      //star
      push();
      translate(800, 400);
      star(0, 0, 70, 80, 30);
      pop(); 

      erase();
      typeStack();
      noErase();
    }

    function drawStarThirtyLg(colorName, lineOne, lineTwo, lineThree, imgShow, imgChoice) {
      fill(colorName);

      showImage(imgShow, imgChoice);

      //star
      push();
      translate(800, 400);
      star(0, 0, 75, 95, 30);
      pop(); 

      erase();
      typeStack();
      noErase();
    }


    function drawStamp(colorName, lineOne, lineTwo, lineThree, imgShow,imgChoice) {
      fill(colorName);
      
      showImage(imgShow, imgChoice);

      beginShape();
      let arcSize = 32;
      for (let i = 0; i < 5; i++) {
        arc(736, 336 + (arcSize * i), arcSize, arcSize, PI/2, PI + HALF_PI);
        arc(864, 336 + (arcSize * i), arcSize, arcSize, PI + HALF_PI, HALF_PI);
      }
      rect(736, 320, 128, 160);
      endShape(CLOSE);

      erase();
      typeStack();
      noErase();
    } 

  /* SUPPORT */

    //ADD NEW IMGS HERE ↓
    function showImage(imgShow, imgChoice) {
      if (imgShow == true && imgChoice == FUEL) {
        image(FUEL, 730, 280);
      } else if (imgShow == true && imgChoice == MATCH) {
        MATCH.resize(300,0);
        image(MATCH, 675, 320);
      } else if (imgShow == true && imgChoice == LIGHTER) {
        LIGHTER.resize(300,0);
        image(LIGHTER, 680, 220);
      } else if (imgShow == true && imgChoice == CIG) {
        CIG.resize(300,0);
        image(CIG, 650, 340);
      } else if (imgShow == true && imgChoice == BOOK) {
        BOOK.resize(250,0);
        image(BOOK, 580, 180);
      } else if (imgShow == true && imgChoice == LOGO) {
        LOGO.resize(400,0);
        image(LOGO, 600, 350);
      } else if (imgShow == true && imgChoice == MOLOTOV) {
        MOLOTOV.resize(200,0);
        image(MOLOTOV, 715, 200);
      } else if (imgShow == true && imgChoice == CERT) {
        CERT.resize(250,0);
        image(CERT, 770, 230);
      } else if (imgShow == true && imgChoice == URN) {
        URN.resize(170,0);
        image(URN, 650, 280);
      } else if (imgShow == true && imgChoice == CAMERA) {
        CAMERA.resize(250,0);
        image(CAMERA, 600, 290);
      } else if (imgShow == true && imgChoice == KEG) {
        KEG.resize(250,0);
        image(KEG, 740, 250);
      } else if (imgShow == true && imgChoice == GAS) {
        GAS.resize(200,0);
        image(GAS, 760, 240);
      } else { 

      }
    }

    function typeStack() {
      textAlign(CENTER);
      textStyle(NORMAL);
      textFont(typefaceH2);
      textSize(28);
      text(lineOne, 800, 400 - 32);

      textFont(typefaceH1);
      textSize(56);
      text(lineTwo, 800, 400 + 20);

      textFont(typefaceH2);
      textSize(28);
      text(lineThree, 800, 400 + 46);
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
