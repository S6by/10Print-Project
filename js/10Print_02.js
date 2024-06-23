let spacing = 60
let x = 0;
let y = 0;
function setup() {
  createCanvas(windowWidth, windowHeight -10);
  background( 0 );
}

function draw() { 
  strokeWeight ( 30 )
  if ( random ( 1 ) < 0.5 ) {
    //stroke ( 10, 40, 60) 
     stroke ( random ( 0 ) ,random (255) , random (0) )
    rect ( x,y,x+spacing,y+spacing );
    noFill ()
  } else { 
  //stroke ( 30, 70, 80) 
    stroke ( random ( 0 ) ,random (300), random (0) )
    rect ( y, x+spacing,x,y+spacing );
    noFill ()
  }
  x += spacing;
  if ( x > windowWidth) {
    x=0
    y +=spacing
  
  }
    
}
