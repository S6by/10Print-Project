let a = 1000;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0)
}

function draw() {
  fill(0)
  cerchio()
  
  if(random(1) < 0.5){
    
    stroke('white')
    
    }else {
      
      stroke('black')
      
      }
  
  
}

function cerchio(){
  
  if (a!=0) {
  circle(windowWidth/2,windowHeight/2,a)
  a = a -1;
 
  }else{
    
    }
    

}
  
