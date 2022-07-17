const firebaseConfig = {
apiKey: "AIzaSyCb1dJ6sfn7IP53k05ad5ZVFHbMhbdvCEU",
authDomain: "kwitter2-877b1.firebaseapp.com",
databaseURL: "https://kwitter2-877b1-default-rtdb.firebaseio.com",
projectId: "kwitter2-877b1",
storageBucket: "kwitter2-877b1.appspot.com",
messagingSenderId: "947416545402",
appId: "1:947416545402:web:126e9fcf814a7de5d7e3c3"
};
function addRoom(){
localStorage.getItem(room_name);
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {
document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
user_name="";
room_name="";
<div>

</div>
//End code
});});}
getData();

function redirectToRoomName(){
localStorage.storeItem(room_name);
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name", name);
window.location="kwitter_room.html";
}

function send(){
firebase.database().ref (room_name).push({
name:user_name, 
message:msg,
like: 0
});
}