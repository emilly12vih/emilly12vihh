function setup() {
  createCanvas(600, 600);
background("rgb(131,131,228) ")
}

  
function draw() {
  fill("black")
  stroke("white")
  strokeWeight(5);
  
  if(mouseIsPressed)
  rect(mouseX, mouseY, 20, 30)
  }
