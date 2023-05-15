object = [];
function back() {
    window.location = "index.html"
}


function preload() {
    img2 = loadImage("sports.jpg");
}

function setup() {
    canvas = createCanvas(700, 500);
    model = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Image ..."

}

function modelLoaded() {
    model.detect(img2, showresult);
}

function showresult(error, result) {
    if (error) {
        console.log("Reload");
    } else {
        console.log(result);
        object = result;
    }
}
function draw() {
    image(img2, 0, 0, 700, 500);
    for (i = 0; i < object.length; i++) {
        document.getElementById("status").innerHTML = "Image Detected"
        stroke("red");
        strokeWeight(3)
        noFill();
        rect(object[i].x - 50, object[i].y - 30, object[i].width, object[i].height);
        accuracy = (object[i].confidence * 100).toFixed(2);
        strokeWeight(1);
        textSize(20);
        fill("red")
        text(object[i].label + " " + accuracy + "%", object[i].x - 25, object[i].y)


    }


}



