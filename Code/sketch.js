//songs
let currentGameIndex = 0;
let currentSongIndex = 0;
let gameTitle = ["AC", "RE", "SDV", "DD"];
let songTitle = ["KK Slider", "Safe Room", "Moonlight Jellies", "Crow's Ballad"];

//gradient
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

//trail
let trail = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Define colors
    b1 = color(255);
    b2 = color(0);
    c1 = color(204, 102, 0);
    c2 = color(0, 102, 153);

    angleMode(DEGREES);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
    divAc = select("#animalCrossing");
    divRe = select("#residentEvil");
    divSv = select("#stardewValley");
    divDd = select("#deathsDoor");
}

function draw() {

  if (currentGameIndex === 0) {
    animalCrossing();
    divAc.show();
    divRe.hide();
    divSv.hide();
    divDd.hide();
  } else if (currentGameIndex === 1) {
    residentEvil();
    divAc.hide();
    divRe.show();
    divSv.hide();
    divDd.hide();
  } else if (currentGameIndex === 2) {
    stardewValley();
    divAc.hide();
    divRe.hide();
    divSv.show();
    divDd.hide();
  } else if (currentGameIndex === 3) {
    deathsDoor();
    divAc.hide();
    divRe.hide();
    divSv.hide();
    divDd.show();
  }
 
  //Text
  textAlign(CENTER, CENTER);
  textSize(120);
  text(gameTitle[currentGameIndex], width/2, height/2);
  textAlign(RIGHT);
  textSize(24);
  text(songTitle[currentGameIndex], width - 72, height - 72);
}

function keyPressed() {
  if (key === ' ') {
    currentGameIndex = (currentGameIndex + 1) % gameTitle.length;
    currentSongIndex = (currentSongIndex + 1) % songTitle.length;
  }
}

function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
  let gradient = drawingContext.createRadialGradient(
    sX, sY, sR, eX, eY, eR
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);

  drawingContext.fillStyle = gradient;
}


function animalCrossing() {
  background('white');
  radialGradient(
    width*1.5, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, width,//End pX, pY, End circle radius
    color(120, 100, 100, 100), //Start color
    color(200, 100, 100, 100), //End color
  );
  rect(0, 0, width, height);
  

  fill('white');
  radialGradient(
    width/2, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, width,//End pX, pY, End circle radius
    color(190, 100, 100, 100), //Start color
    color(310, 100, 100, 0), //End color
  );
  trail.push(createVector(mouseX, mouseY));
  if (trail.length > 100) {
    trail.shift();
  }
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    let followerSize = map(i, 0, trail.length - 1, 80, 150);
    ellipse(pos.x, pos.y, followerSize, followerSize);
  }
  let followerSize = map(mouseY, 0, height, 80, 80);
  ellipse(mouseX, mouseY, followerSize, followerSize);

  fill('white');
  radialGradient(
    width/2, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, 380,//End pX, pY, End circle radius
    color(360, 100, 100, 100), //Start color
    color(360, 100, 100, 100), //End color
  );
}


function residentEvil() {
  background('white');
  radialGradient(
    width*1.5, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, width,//End pX, pY, End circle radius
    color(120, 50, 20, 100), //Start color
    color(200, 100, 100, 100), //End color
  );
  rect(0, 0, width, height);
  

  fill('white');
  radialGradient(
    width/2, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, width,//End pX, pY, End circle radius
    color(10, 10, 10, 100), //Start color
    color(30, 10, 10, 0), //End color
  );
  trail.push(createVector(mouseX, mouseY));
  if (trail.length > 100) {
    trail.shift();
  }
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    let followerSize = map(i, 0, trail.length - 1, 80, 150);
    ellipse(pos.x, pos.y, followerSize, followerSize);
  }
  let followerSize = map(mouseY, 0, height, 80, 80);
  ellipse(mouseX, mouseY, followerSize, followerSize);

  fill('white');
  radialGradient(
    width/2, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, 380,//End pX, pY, End circle radius
    color(360, 100, 100, 100), //Start color
    color(360, 100, 100, 100), //End color
  );
}


function stardewValley() {
  background('white');
  radialGradient(
    width*1.5, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, width,//End pX, pY, End circle radius
    color(120, 150, 200, 100), //Start color
    color(200, 100, 50, 100), //End color
  );
  rect(0, 0, width, height);
  

  fill('white');
  radialGradient(
    width/2, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, width,//End pX, pY, End circle radius
    color(100, 150, 210, 100), //Start color
    color(330, 100, 110, 0), //End color
  );
  trail.push(createVector(mouseX, mouseY));
  if (trail.length > 100) {
    trail.shift();
  }
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    let followerSize = map(i, 0, trail.length - 1, 80, 150);
    ellipse(pos.x, pos.y, followerSize, followerSize);
  }
  let followerSize = map(mouseY, 0, height, 80, 80);
  ellipse(mouseX, mouseY, followerSize, followerSize);

  fill('white');
  radialGradient(
    width/2, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, 380,//End pX, pY, End circle radius
    color(360, 100, 100, 100), //Start color
    color(360, 100, 100, 100), //End color
  );
}

function deathsDoor() {
  background('white');
  radialGradient(
    width*1.5, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, width,//End pX, pY, End circle radius
    color(180, 50, 100, 100), //Start color
    color(230, 100, 100, 100), //End color
  );
  rect(0, 0, width, height);
  

  fill('white');
  radialGradient(
    width/2, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, width,//End pX, pY, End circle radius
    color(10, 30, 100, 100), //Start color
    color(30, 10, 10, 0), //End color
  );
  trail.push(createVector(mouseX, mouseY));
  if (trail.length > 100) {
    trail.shift();
  }
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    let followerSize = map(i, 0, trail.length - 1, 80, 150);
    ellipse(pos.x, pos.y, followerSize, followerSize);
  }
  let followerSize = map(mouseY, 0, height, 80, 80);
  ellipse(mouseX, mouseY, followerSize, followerSize);

  fill('white');
  radialGradient(
    width/2, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, 380,//End pX, pY, End circle radius
    color(360, 100, 100, 100), //Start color
    color(360, 100, 100, 100), //End color
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}