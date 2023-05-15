Status = ""
object = [];

function back() {
    window.location = "index.html"
}

function setup() {
    canvas = createCanvas(700, 500);
    video = createCapture(VIDEO);
    video.hide();

}

function start() {
    model = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Image ..."
}

function modelLoaded() {
    console.log("model is loaded");
    Status = true;
}

function showresult(error, result) {
    if (error) {
        console.log("error");
    } else {
        console.log(result);
        object = result
    }
}
function draw() {
    image(video, 0, 0, 700, 500);
    if (Status == true) {
        model.detect(video, showresult);
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Image Detected"
            stroke("red");
            strokeWeight(3)
            noFill();
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
            accuracy = (object[i].confidence * 100).toFixed(2);
            strokeWeight(1);
            textSize(20);
            fill("red")
            text(object[i].label + " " + accuracy + "%", object[i].x - 25, object[i].y)


        }
    }

}
