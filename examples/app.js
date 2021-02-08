// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDqBk-udpuia0lTR7c8NRUWJb9Y3uPvM_c",
    authDomain: "brdm-bus-service.firebaseapp.com",
    databaseURL: "https://brdm-bus-service.firebaseio.com",
    projectId: "brdm-bus-service",
    storageBucket: "brdm-bus-service.appspot.com",
    messagingSenderId: "680196580992",
    appId: "1:680196580992:web:8c31e1c9d244b6b5e4e865",
    measurementId: "G-BK94LEYH8S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth();
  function signUp(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");

  }
  
  function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    console.log("sign in confirmed")
    promise.catch(e => alert(e.message));
    
    
    
    
  }
  
  
  function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    
  }
  
  
  
  auth.onAuthStateChanged(function(user){
    
    if(user){
      
      var email = user.email;

      alert("Active User " + email);
      location.href = 'index.html';
      //Take user to a different or home page

      //is signed in
      
    }else{
      
      alert("No Active User");
      //no user is signed in
    }
    
    
    
  });

  function googleform(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);


  }