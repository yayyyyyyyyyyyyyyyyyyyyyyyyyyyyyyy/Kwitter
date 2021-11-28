
var firebaseConfig = {

      apiKey: "AIzaSyA_QPFLbpk8Y-iYEaqZCuEblSYZy_qgWCg",
    
      authDomain: "kwitter-b3edf.firebaseapp.com",
    
      databaseURL: "https://kwitter-b3edf-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-b3edf",
    
      storageBucket: "kwitter-b3edf.appspot.com",
    
      messagingSenderId: "601234274619",
    
      appId: "1:601234274619:web:2ec68417992d4582051f1e",
    
    };
    
    
    
    // Initialize Firebase
    
firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name-" + Room_names);
      row="<div class='room_name' id="+ Room_names + "onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.HTML";

}