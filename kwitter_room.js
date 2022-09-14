
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCM2_0RmNAutGXAhKTyi0JRI-N0nLLOPgc",
      authDomain: "c101-practice.firebaseapp.com",
      databaseURL: "https://c101-practice-default-rtdb.firebaseio.com",
      projectId: "c101-practice",
      storageBucket: "c101-practice.appspot.com",
      messagingSenderId: "512228018326",
      appId: "1:512228018326:web:8b26254fa5d331d875dab7",
      measurementId: "G-X1LNCVFD5R"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML - "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
       document.getElementById("output").innerHTML += row;
      });
    });

}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
