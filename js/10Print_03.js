let x=0
let y=0
let spacing=20


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  //stroke(random(255),random(255),random(255))
  
}

function draw(){
  //triangle(x1, y1, x2, y2, x3, y3)
}

function draw() {
  strokeWeight(10);
  //stroke(100,245,20);
  if (random(1) < 0.5) {
    
    //stroke(random(255),random(255),random(255))
    stroke(0)
    //line(0,20,40,20);
    line(x,y+spacing,x+spacing*2,y+spacing)
  } else {
    //stroke(random(255),random(255),random(255))
    stroke(0)
    //line(20,0,20,40);
    line(x+spacing,y,x+spacing,y+spacing*2)
  }
  x=x+spacing
  if (x> width){
    x=0;
    y=y+spacing;
  }
} 
