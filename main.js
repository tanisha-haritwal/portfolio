<link rel="preconnect" href="https://fonts.googleapis.com"></link>
function startClassification(){
navigator.mediaDevices.getUserMedia ({ audio: true});
ml5.classifier(model.json , "modelReady()")
}
function modelReady(){
classifier.classify(gotResults)
}
function gotResults(error, results){
if(error){
console.error(error);
}
else{
console.log(results);
random_number_r= Math.floor(Math.random()*255)+1;
random_number_g= Math.floor(Math.random()*255)+1;
random_number_b= Math.floor(Math.random()*255)+1;
dog=0;
cat=0;
cow=0;
tiger=0;
document.getElementById("id_of_element")
document.getElementById("result_count").style
document.getElementById("result_count").style.color
img1= document.getElementById("dog-barking.gif");
img2= document.getElementById("cat-meowing.gif");
img3= document.getElementById("cow-mooing.gif");
img4= document.getElementById("tiger-roaring.gif");

}
}
