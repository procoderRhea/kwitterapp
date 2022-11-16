
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyD1ClSK16oheqt-fK2gbmtqfB9-bJN5tL4",
  authDomain: "kwitter-af4a4.firebaseapp.com",
  databaseURL: "https://kwitter-af4a4-default-rtdb.firebaseio.com",
  projectId: "kwitter-af4a4",
  storageBucket: "kwitter-af4a4.appspot.com",
  messagingSenderId: "294284726673",
  appId: "1:294284726673:web:4625ccf39fe7959b184a30"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !!! ";

function addroom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_names");
row = "<div class = 'room_name' id = "+ Room_names +" onlcick = 'redirectToRoomName(this.id)'> #"+ Room_names +" </div><hr>";
document.getElementById("output").innerHTML += row;

      });});}
getData();
 
 function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
 }

 function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_login.html";
 }

