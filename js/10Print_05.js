let a = 0;
let b = 35;

let x = 35;
let y = 0;

let funzioni = [tr1, tr2, tr3, tr4];

function setup() {
    
    createCanvas(windowWidth, windowHeight);
    background(0);

}

function draw() {
      
  let funzioneCasuale = random(funzioni);   
  funzioneCasuale();
  
}

function tr1(){

    fill( random(255) , 0, 0);
    triangle ( a , x , b , x , b , y ); 
    
     a = a + 35;  
     b = b + 35;
        
  if (a > windowWidth){
    
    a = 0;
    b = 35; 
    
    x = x + 35;
    y = y + 35;
    
  }
  
}

function tr2(){
  
    fill ( 0, random(255), 0);
    triangle ( a , y , a , x , b , x ); 
    
     a = a + 35;  
     b = b + 35;
        
  if (a > windowWidth){
    
    a = 0;
    b = 35;
        
    x = x + 35;
    y = y + 35;
    
  }
  
}

function tr3(){
  

    fill ( 0 , 0,  random(255));
    triangle ( a , y , b , y , a , x ); 
    
     a = a + 35;  
     b = b + 35;
  
  if (a > windowWidth){
    
    a = 0;
    b = 35;
        
    y = y + 35;
    x = x + 35;
    
  }
  
}

function tr4(){

    fill ( random(255) , random(255), random(255));
    triangle ( a , y , b , y , b , x ); 
     a = a + 35;  
     b = b + 35;
      
  if (a > windowWidth){
    
    a = 0;
    b = 35;
        
    x = x + 35;
    y = y + 35;
    
  }
  
}