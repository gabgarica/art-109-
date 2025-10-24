let canvas; 

function setup() {
 canvas= createCanvas(windowWidth, windowHeight);
 canvas.positions(0,0);
 canvas.style("z-index", -2);
  background(255);
}

function windowResized(){
    resizeCanvas(500,500);
    
}

function draw() {
    strokeWeight(0);
    fill(random(200,255),random(200,255),random(200,255));
    ellipse(mouseX,mouseY,30,30);


}