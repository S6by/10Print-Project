let spacing = 60;
let x = 0;
let y = 0;
function setup() {
  createCanvas(windowWidth, windowHeight - 10);
  background(255);
  strokeWeight(10);
  strokeJoin(ROUND);
}

function draw() {
  //print(random(1));
  if (random(1) < 0.5) {
    //rect(x, y, spacing, spacing);

    stroke(random(255), random(255), random(255));
    //stroke(0,0,0);
    line(x, y, x + spacing, y + spacing);
  } else {
    //stroke(random(255) , random(255) , random(255));
    stroke(0, 0, 0);
    line(x + spacing, y, x, y + spacing);
  }
  x += spacing;

  if (x > windowWidth) {
    x = 0;
    y += spacing;
  }
}
