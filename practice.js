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
  function adduser()
{
    user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
});
}