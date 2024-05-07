let spacing = 35;
let x = 35;
let a = 0;
let b = 20;
let c = 40;
let z = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
    background(0);

}

function draw() {
  //stroke(255);
  
  if ( random (100) < 50){
    
    fill(random(255), 0, 0);
    triangle( a , x , b , z , c , x ); 
     
     a = a + 40;
  
     b = b + 40;
  
     c = c + 40;
    
  
  }else{
      
    fill(random(255), 0, 0);
    triangle( a , z , b , x , c , z );

     a = a + 40;
  
     b = b + 40;
  
     c = c + 40;
  }
  
     
  
  if (a > windowWidth){
    a = 0;
    b = 20;
    c = 40;
    
    
    x = x + spacing;
    z = z + spacing;
  }

}