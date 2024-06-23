let spacing = 30;
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight - 10);
  background(0);
}

function draw() {
  fill(random(255), random(255), random(255));
  rect(x, y, 40, 40);
  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}
