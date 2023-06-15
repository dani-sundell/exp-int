//songs
let currentGameIndex = 0;
let currentSongIndex = 0;
let currentUriIndex = 0;
let gameTitle = ["Animal Crossing: New Horizons", "Resident Evil 2", "Stardew Valley", "Death's Door"];
let songTitle = ["KK Slider", "Safe Room", "Moonlight Jellies", "Crow's Ballad"];
let trackIds = ["spotify:track:5QThTYJveDHE40f4zODdyo", "spotify:track:5inqbGqSc2i7iBOrgOlIaA", "spotify:track:5zMfTGSh3e9F1vp8TBq9hZ", "spotify:track:2lcpf7FgQHlSKzg1A1NF6b"];

//trail
let trail = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1000);
    angleMode(DEGREES);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
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
 
  //Text
  textFont('bookmania');
  textStyle(ITALIC);
  textAlign(CENTER);
  textSize(72);
  text(gameTitle[currentGameIndex], width/2, height/2);
  textFont('roc-grotesk');
  textStyle(NORMAL);
  textAlign(RIGHT);
  textSize(16);
  text('use right click to change scene & song', width - 72, 72);
  textAlign(LEFT);
  textSize(16);
  text('use left click to draw', 72, 72);
  textAlign(RIGHT);
  textSize(16);
  textWrap(WORD);
  text('Relax and sketch to some of my favorite tracks in various video games', width  * .76, height * .9, width * .2, height * .25);

}

function mouseReleased() {
  if (mouseButton === RIGHT) {
  currentGameIndex = (currentGameIndex + 1) % gameTitle.length;
  currentSongIndex = (currentSongIndex + 1) % songTitle.length;
  currentUriIndex =  (currentUriIndex + 1) % trackIds.length;
  trail.length = 0;
  }
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
  
 if (mouseIsPressed === true) {
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

  fill('white');
  radialGradient(
    width/2, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, 380,//End pX, pY, End circle radius
    color(0, 0, 100, 100), //Start color
    color(0, 0, 100, 100), //End color
  );
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
  
  if (mouseIsPressed === true) {
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

  fill('white');
  radialGradient(
    width/2, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, 380,//End pX, pY, End circle radius
    color(0, 0, 100, 100), //Start color
    color(0, 0, 100, 100), //End color
  );
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
  
  if (mouseIsPressed === true) {
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

  fill('white');
  radialGradient(
    width/2, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, 380,//End pX, pY, End circle radius
    color(0, 0, 100, 100), //Start color
    color(0, 0, 100, 100), //End color
  );
}

function deathsDoor() {

  radialGradient(
    width + 120, height/2 - 120, 0,//Start pX, pY, start circle radius
    width, height/2-120, width,//End pX, pY, End circle radius
    color(140, 40, 20, 100), //Start color
    color(240, 10, 5, 100), //End color
  );
  rect(0, 0, width, height);
  

  fill('white');
  radialGradient(
    width, height, 200,//Start pX, pY, start circle radius
    width/2, height, width,//End pX, pY, End circle radius
    color(340, 80, 100, 100), //Start color
    color(90, 30, 60, 0), //End color
  );
  
  if (mouseIsPressed === true) {
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

  fill('white');
  radialGradient(
    width/2, height/2-120, 0,//Start pX, pY, start circle radius
    width/2, height/2-120, 380,//End pX, pY, End circle radius
    color(0, 0, 100, 100), //Start color
    color(0, 0, 100, 100), //End color
  );
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
    EmbedController.addListener('ready', e => {
      console.log('ready');
      EmbedController.play(); 
    });
    EmbedController.addListener('playback_update', e => {
      if (e.data.position === 0 && e.data.isPaused === true) {
        EmbedController.seek(1);
      }
      if (e.data.position === 1000 && e.data.isPaused === true) {
            EmbedController.play();   
      };
    });    
    document.body.addEventListener('contextmenu', function(ev) { // listen for right click to change track uri
      ev.preventDefault();
      EmbedController.loadUri(trackIds[currentUriIndex]);
      EmbedController.play(); 
      return false;
  }, false);
  };
  IFrameAPI.createController(element, options, callback);
};
