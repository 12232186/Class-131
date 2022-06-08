img=""

function preload() {
img = loadImage ("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
canvas.center()
}

function draw() {
    image (img , 0 , 0 , 640 , 420);
    fill("blue");
    text ("Dog" , 45 , 75);
    noFill()
    stroke ("green");
    rect ( 30 , 60 , 450 , 350 );

    
    fill("red");
    noFill()
    stroke ("black");
text ("Cat" , 330 , 95);
rect ( 300 , 75 , 275 , 350 ); 

}