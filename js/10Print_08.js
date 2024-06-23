let x = 0 
let y = 0

function setup ( ) {
  createCanvas ( windowWidth, windowHeight)
  background (30 )
  noFill ( )
}

function draw ( ) {
  stroke (0, 255, 0)
  strokeWeight (10)
  ellipseMode (CORNER)
  ellipse (x,y,50)
  
  x = x + 50
  if (x > windowWidth ) {
    x= 0 
    y = y + 50
  }
}
