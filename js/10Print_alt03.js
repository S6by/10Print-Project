let a = 2000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(0);
  eseguiCiclo();
}

function eseguiCiclo() {
  while (a != 0) {
    cerchio();
  }
}

function cerchio() {
  if (a != 0) {
    if (random(1) < 0.5) {
      stroke(0);
    } else {
      stroke(255);
    }
    circle(windowWidth/2, windowHeight/2, a);
    a = a - 1;
  }
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas();
}
