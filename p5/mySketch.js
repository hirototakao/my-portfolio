let x = 0;
let y = 0;
let bg;
let sound;

let bubbles =[]; 

function setup(){
 createCanvas(945, 528);
	  for (let i = 0; i < 1; i++){
         bubbles[i] = new Bubble(random(width),random(400 ,800));
      }
}

function preload() {
   bg = loadImage("../image/background.jpg");
} 
function draw() {
      background(bg);
			for (let i = 0; i < bubbles.length; i++){
        bubbles[i].show();
        bubbles[i].move();
      }
			strokeWeight(2.5);
			stroke('lightblue');
			x += (mouseX - x) * 0.2;
	    y += (mouseY - y) * 0.2;
			circle(x, y, 50);
  }

function mousePressed(){
  append(bubbles, new Bubble(mouseX,mouseY));
}

class Bubble {
	constructor(tempX,tempY){
  	this.x = tempX;
    this.y = tempY;
    this.size = random(20,50);
    this.r = random(0, 173);
    this.g = random(0, 216);
    this.b = random(230, 256);
  }
  
  move(){
    this.x += random(-4,4);
  	this.y += random(-5,-3);
    if (this.y < 0){
        this.y = random(height,height+100);
        }
    if (this.x>width){
        this.x = 0;
        }
    if (this.x < 0){
    	this.x = width;
    }
  }
  
  show(){
    stroke(255);
  	fill(this.r,this.g,this.b,100);
  	ellipse(this.x,this.y,this.size,this.size);
  }
}