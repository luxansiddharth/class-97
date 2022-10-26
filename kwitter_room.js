
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCoEkV3lI32Z1Yy5OGegfkVMR6bL3ZhK2E",
      authDomain: "kwitter-bf7ed.firebaseapp.com",
      databaseURL: "https://kwitter-bf7ed-default-rtdb.firebaseio.com",
      projectId: "kwitter-bf7ed",
      storageBucket: "kwitter-bf7ed.appspot.com",
      messagingSenderId: "336567004204",
      appId: "1:336567004204:web:10278b33afd13ce2d8f589"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

   function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row; });
       });
      }
getData();
function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"; 
      }

      function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }