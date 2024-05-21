let spacing = 60
let x = 0;
let y = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
    background(0);

}

function draw() {
  stroke(255);
  strokeWeight(10);
  
  if ( random (1) < 0.5){
    
    
    line( x , y , x , y + spacing );
  
  }else{
  
   
    line( x + spacing , y , x , y );

  }
  
    x = x + spacing;
  
  if (x > windowWidth){
    x = 0;
    y = y +spacing;
  }

}
