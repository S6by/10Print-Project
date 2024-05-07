let a = 0;
let b = 35;
let z = 35;
let f = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
    background(255);
    
}

function draw() {
  
  strokeWeight(0);
  fill(0, 0, 255);
  if ( random (100) < 50){
     
    triangle( a , z , b , z , b , f );
    fill(random(255), 0, 255);
    triangle( a , f , b , f , a , z );
    
     a = a + 35;
     b = b + 35;
    
  }else{
    
  }
  if (a > windowWidth){
    
    a = 0;
    b = 35;
    c = 35;
    z = z + 35;
    f = f + 35
  
  }

}