function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    backgroud("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}
function draw() {
    strokeWeight(13);
    strokeColor(0, 0, 0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function preload() {
    classifier = mlf.imageClassifier('DoodleNet');
}
function clearcanvas() {
    backgroud("white");
}
function classifyCanvas() {
    classifer.classify(canvas, gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = "Label: " + results[0].label;
    document.getElementById('confidence').innerHTML = "Counfidence: "+ Math.round(results[0].confidence*100)+"%";
    utterThis = new SpeechSynthesisUtterance(reults[0].label);
    synth.speak(utterThis);
}
