const firebaseConfig = {
    apiKey: "AIzaSyDHuf7V-RomnWgXfPa4B8tpa5GFhymAAPs",
    authDomain: "letschat-e84ea.firebaseapp.com",
    projectId: "letschat-e84ea",
    storageBucket: "letschat-e84ea.appspot.com",
    messagingSenderId: "922501279086",
    appId: "1:922501279086:web:1aca6eb1ea404a324da57f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
