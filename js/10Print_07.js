let x=0
let y=0
let spacing=90

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255, 255 ,255);
  //stroke(random(255),random(255),random(255))
  
}

function draw() {
  strokeWeight(6);
  fill(random(255),random(255),random(255))
  //stroke(100,245,20);
  if (random(1) < 0.5) {
    //rect(x,y,spacing,spacing)
    stroke(random(255),random(255),random(255))
    //line(x,y,x+spacing,y+spacing);
    circle(x,y,spacing)
  } else {
    stroke(random(255),random(255),random(255))
    //line(x,y+spacing,x+spacing,y);
    circle(x,y,spacing-10)
  }
  
  x= x+spacing
  if (x> windowWidth){
    x=0;
    y=y+spacing;
  }
} 


