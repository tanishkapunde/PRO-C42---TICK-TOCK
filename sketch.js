function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  

  translate(200,200)
  rotate(-90)

  hr = hour();
  min = minute();
  sec = second();

  hrAngle = map(hr % 12,0,12,0,360)
  minAngle = map(min,0,60,0,360)
  secAngle = map(sec,0,60,0,360)

  push()
  rotate(hrAngle)
  strokeWeight(7)
  stroke("blue")
  line(0,0,50,0)
  pop()

  push()
  rotate(minAngle)
  strokeWeight(7)
  stroke("green")
  line(0,0,75,0)
  pop()

  push()
  rotate(hrAngle)
  strokeWeight(7)
  stroke("black")
  line(0,0,100,0)                               
  pop()

  strokeWeight(10)
  noFill()
  arc(0,0,260,260,0,hrAngle)
  stroke("blue")
  arc(0,0,280,280,0,minAngle)
  stroke("green")
  arc(0,0,300,300,0,secAngle)
  stroke("black")
  
  drawSprites();
}