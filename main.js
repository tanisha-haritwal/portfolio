<link rel="preconnect" href="https://fonts.googleapis.com"></link>
function startClassification(){
navigator.mediaDevices.getUserMedia ({ audio: true});
ml5.classifier(model.json , "modelReady()")
}
function modelReady(){
classifier.classify(gotResults)
}
function gotResults(){
console.log(gotResults)
}