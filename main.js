Webcam.set({
width:350,
height:300,
img_format:'png',
png:90
});

camera= document.getElementById("camera");
Webcam.attach('camera');

function take_snapshot(){
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
})
}
console.log('ml5 version:', ml5.version);
classifier=imageClassifier('https://teachablemachine.withgoogle.com/models/uMptNA6FI/model.json', modelLoaded);