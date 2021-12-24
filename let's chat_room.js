
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCFcGkNE7TIyBnMX6DPph7xbyrMuYgEOss",
      authDomain: "kwitter-project-e82b1.firebaseapp.com",
      databaseURL: "https://kwitter-project-e82b1-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-e82b1",
      storageBucket: "kwitter-project-e82b1.appspot.com",
      messagingSenderId: "422203200243",
      appId: "1:422203200243:web:90152189cd65b9cf2a5d86"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      window.location = "index.html"
}

