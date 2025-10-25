
let canvas;
let xPos=0;
let yPos=0;
let easing = .5;

function setup() {
  canvas=createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index",-2);
 // background(125);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    clear();

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);


    drawThing(xPos,yPos);
}

function mouseMoved() {
   // drawThing(mouseX,mouseY);
     //drawThing(mouseX-50,mouseY +75);
}

function drawThing(_x,_y) {
    //eyes
    fill(255);
   // triangle(30, 75, 58, 20, 86, 75);
    ellipse(_x,_y,50,50,);
    ellipse(_x - 20,_y + 5,50,50);
    ellipse(_x - 30,_y + 5,70,50);

    //dots
    fill(0);
    ellipse(_x + 20, _y, 5, 10);
    ellipse(_x - 10,_y +5, 5, 5);

    //strokeWeight(0);
    //fill(random(200,255), random(200,255), random(200,255));
    //ellipse(_x,_y,30,30);
}
