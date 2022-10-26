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
   room_name = localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
       console.log(firebase_message_id);
       console.log(message_data);

       Name=message_data['name'];
       message=message_data['message'];
      like=message_data['like'];
  namewithtag="<h4> "+ Name +"<img class='user_tick' src='tick.png'>";
  messagewithtag="<h4 class='message_h4'>" + message + "</h4>";
likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
 row=namewithtag+messagewithtag+likebutton+span_with_tag;
 document.getElementById("output").innerHTML += row;


      } });  }); }
getData();



function updatelike(message_id)
{
      console.log("clicked on like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes= Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
             like : updated_likes
            
});
}
function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }

