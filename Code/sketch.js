//songs
let currentGameIndex = 0;
let currentSongIndex = 0;
let currentUriIndex = 0;
let gameTitle = ["Animal Crossing: New Horizons", "Resident Evil 2", "Stardew Valley", "Death's Door"];
let songTitle = ["KK Slider", "Safe Room", "Moonlight Jellies", "Crow's Ballad"];
let trackIds = ["spotify:track:5QThTYJveDHE40f4zODdyo", "spotify:track:5inqbGqSc2i7iBOrgOlIaA", "spotify:track:5zMfTGSh3e9F1vp8TBq9hZ", "spotify:track:2lcpf7FgQHlSKzg1A1NF6b"];

//trail
let trail = [];
var drawTrail;

//control clck
let controlKey = false;

  //eye coords
  var eyeW;
  var eyeH;

  var eyeX1;
  var eyeX2;
  var eyeY1;
  var eyeY2;

//text overlay opacity

var textFillOpacity;
var imgAlpha;

function preload() {
  iconCrtl = loadImage('assets/ctrl.svg');
  iconLeftClick = loadImage('assets/left click.svg');
  iconRightClick = loadImage('assets/right click.svg');
  iconEye = loadImage('assets/eye.svg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1000);
    angleMode(DEGREES);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();

    //eye coords
    eyeW = 64;
    eyeH = 32;
    eyeX1 = width/2 - eyeW/2;
    eyeX2 = width/2 + eyeW/2;
    eyeY1 = height - 72 - eyeH/2;
    eyeY2 = height - 72 + eyeH/2;

    textFillOpacity = 1;
    imgAlpha = 255;
    drawTrail = true;
}

function draw() {
  background('white');
  if (currentGameIndex === 0) {
    animalCrossing();
  } else if (currentGameIndex === 1) {
    residentEvil();
  } else if (currentGameIndex === 2) {
    stardewValley();
  } else if (currentGameIndex === 3) {
    deathsDoor();
  }

  drawingContext.fillStyle = `rgba(255, 255, 255, ${textFillOpacity})`;

  //Header
  textFont('bookmania');
  textStyle(ITALIC);
  textAlign(CENTER);
  textSize(96);
  text('Relax & sketch', width/2, height/2);

  //Subhead
  textFont('roc-grotesk');
  textSize(18);
  textStyle(NORMAL);
  text('to some of my favorite tracks in various video games', width/2, height/2 + 36);
  
  //Instrutions
  tint(255, imgAlpha);
  textAlign(RIGHT);
  textSize(18);
  text('use right click', width - 440, 72);
  image(iconRightClick, width - 434, 52, 32, 32);
  text('or', width - 376, 72);
  image(iconCrtl, width - 364, 52, 32, 32);
  text('+', width - 314, 72);
  image(iconLeftClick, width - 310, 52, 32, 32);
  text('to change scene & song', width - 72, 72);

  textAlign(LEFT);
  textSize(18);
  text('use left click', 72, 72);
  image(iconLeftClick, 184, 52, 32, 32);
  text('to draw', 222, 72);

  //Game Name
  textAlign(RIGHT);

  textFont('roc-grotesk');
  textStyle(NORMAL);
  textSize(16);
  text('current track from', width - 72, height - 108);

  textFont('bookmania');
  textStyle(ITALIC);
  textSize(24);
  text(gameTitle[currentGameIndex], width - 72, height - 72);

  drawingContext.fillStyle = `rgba(255, 255, 255, 1)`;
  textFont('roc-grotesk');
  textStyle(NORMAL);

  //eye mapping
  if (mouseX > eyeX1 && mouseX < eyeX2 && mouseY > eyeY1 && mouseY < eyeY2) {
    textAlign(CENTER);
    textSize(12);
    text('show / hide overlay', width/2, eyeY1 - eyeH);
  }
  tint(255, 255);
  eyeToggle = image(iconEye, eyeX1, eyeY1, eyeW, eyeH);

  if (mouseX > eyeX1 && mouseX < eyeX2 && mouseY > eyeY1 && mouseY < eyeY2) {
    drawTrail = false;
  } else {
    drawTrail = true;
  } 
}

function keyPressed() {
  if (keyCode === CONTROL) {
    controlKey = true;
    console.log(controlKey, "Control pressed");
  }
}

function keyReleased() {
  if (keyCode === CONTROL) {
    controlKey = false;
    console.log(controlKey, "NOT pressed");
  }
}

function mouseClicked() {
  if (textFillOpacity == 1 && mouseX > eyeX1 && mouseX < eyeX2 && mouseY > eyeY1 && mouseY < eyeY2) {
    textFillOpacity = 0;
    imgAlpha = 0;
    console.log('eye was clicked!');
  } else if (textFillOpacity == 0 && mouseX > eyeX1 && mouseX < eyeX2 && mouseY > eyeY1 && mouseY < eyeY2) {
    textFillOpacity = 1;
    imgAlpha = 255;
  } 
}

function mouseReleased() {
  if (mouseButton === RIGHT || controlKey === true) {
  console.log("this is a right click");
  currentGameIndex = (currentGameIndex + 1) % gameTitle.length;
  currentSongIndex = (currentSongIndex + 1) % songTitle.length;
  currentUriIndex =  (currentUriIndex + 1) % trackIds.length;
  trail.length = 0;
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

  radialGradient(
    width * 1.5, height, 0,//Start pX, pY, start circle radius
    width * .65, height/2-120, width,//End pX, pY, End circle radius
    color(210, 90, 90, 100), //Start color
    color(90, 90, 80, 100), //End color
  );
  rect(0, 0, width, height);
  

  fill('white');
  radialGradient(
    width*1.5, height/4, 0,//Start pX, pY, start circle radius
    width/2, height/4, width,//End pX, pY, End circle radius
    color(210, 90, 100, 100), //Start color
    color(310, 90, 100, 0), //End color
  );
  
 if (mouseIsPressed === true && drawTrail != false) {
  trail.push(createVector(mouseX, mouseY));
  let followerSize = map(mouseY, 0, height, 10, 10);
  ellipse(mouseX, mouseY, followerSize, followerSize);
 } if (mouseIsPressed === false || mouseIsPressed === true) {
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    let followerSize = map(i, 0, trail.length - 1, 100, 60);
    ellipse(pos.x, pos.y, followerSize, followerSize);
  }
};
}

function residentEvil() {

  radialGradient(
    width * 1.5, height, 0,//Start pX, pY, start circle radius
    width * .65, height/2-120, width,//End pX, pY, End circle radius
    color(270, 90, 10, 100), //Start color
    color(180, 90, 50, 100), //End color
  );
  rect(0, 0, width, height);
  

  fill('white');
  radialGradient(
    width*1.5, height/4, 0,//Start pX, pY, start circle radius
    width/2, height/4, width,//End pX, pY, End circle radius
    color(20, 90, 80, 100), //Start color
    color(330, 90, 60, 0), //End color
  );
  
  if (mouseIsPressed === true && drawTrail != false) {
    trail.push(createVector(mouseX, mouseY));
    let followerSize = map(mouseY, 0, height, 10, 10);
    ellipse(mouseX, mouseY, followerSize, followerSize);
   } if (mouseIsPressed === false || mouseIsPressed === true) {
    for (let i = 0; i < trail.length; i++) {
      let pos = trail[i];
      let followerSize = map(i, 0, trail.length - 1, 100, 60);
      ellipse(pos.x, pos.y, followerSize, followerSize);
    }
  };
}

function stardewValley() {

  radialGradient(
    width * 1.5, height, 0,//Start pX, pY, start circle radius
    width * .65, height/2-120, width,//End pX, pY, End circle radius
    color(300, 80, 80, 100), //Start color
    color(180, 80, 80, 100), //End color
  );
  rect(0, 0, width, height);
  

  fill('white');
  radialGradient(
    width, height, 200,//Start pX, pY, start circle radius
    width/2, height, width,//End pX, pY, End circle radius
    color(50, 90, 90, 100), //Start color
    color(150, 90, 80, 0), //End color
  );
  
  if (mouseIsPressed === true && drawTrail != false) {
    trail.push(createVector(mouseX, mouseY));
    let followerSize = map(mouseY, 0, height, 10, 10);
    ellipse(mouseX, mouseY, followerSize, followerSize);
   } if (mouseIsPressed === false || mouseIsPressed === true) {
    for (let i = 0; i < trail.length; i++) {
      let pos = trail[i];
      let followerSize = map(i, 0, trail.length - 1, 100, 60);
      ellipse(pos.x, pos.y, followerSize, followerSize);
    }
  };
}

function deathsDoor() {

  radialGradient(
    width + 120, height/2 - 120, 0,//Start pX, pY, start circle radius
    width, height/2-120, width,//End pX, pY, End circle radius
    color(140, 70, 20, 100), //Start color
    color(240, 10, 20, 100), //End color
  );
  rect(0, 0, width, height);
  

  fill('white');
  radialGradient(
    width, height, 200,//Start pX, pY, start circle radius
    width/2, height, width,//End pX, pY, End circle radius
    color(340, 80, 100, 100), //Start color
    color(90, 30, 60, 0), //End color
  );
  
  if (mouseIsPressed === true && drawTrail != false) {
    trail.push(createVector(mouseX, mouseY));
    let followerSize = map(mouseY, 0, height, 10, 10);
    ellipse(mouseX, mouseY, followerSize, followerSize);
   } if (mouseIsPressed === false || mouseIsPressed === true) {
    for (let i = 0; i < trail.length; i++) {
      let pos = trail[i];
      let followerSize = map(i, 0, trail.length - 1, 100, 60);
      ellipse(pos.x, pos.y, followerSize, followerSize);
    }
  };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById('animalCrossingEmbed');
  const options = {
    width: '100%',
    height: '100',
    uri: 'spotify:track:2lcpf7FgQHlSKzg1A1NF6b',
    theme: 'dark'
  };
  const callback = (EmbedController) => {
    EmbedController.addListener('playback_update', e => {
      if (e.data.position === 0 && e.data.isPaused === true) {
        EmbedController.seek(1);
      }
      if (e.data.position === 1000 && e.data.isPaused === true) {
            EmbedController.play();   
      };
    });
    document.addEventListener("mousedown",function(event) { // listen for control + click to change track uri
      if (event.ctrlKey || event.button == 2) {
        EmbedController.loadUri(trackIds[currentUriIndex]);
        EmbedController.play(); 
      } else { 
        EmbedController.play();
      }
    }, );
    document.body.addEventListener('contextmenu', function(ev) { // listen for right click to change track uri
      ev.preventDefault();
      EmbedController.loadUri(trackIds[currentUriIndex]);
      EmbedController.play(); 
      return false;
    }, false);
  };
  IFrameAPI.createController(element, options, callback);
};
