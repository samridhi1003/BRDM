
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
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
const db = firestore.collection("driverData");
var username = document.querySelector("#name");
var signupdate = document.querySelector("#Signupdate");
var mobile = document.querySelector("#MOBILENO");
var EMail = document.querySelector("#email");
var Origin = document.querySelector("#ORIGIN");
var DEstination = document.querySelector("#DESTINATION");
var routeId = document.querySelector("#ROUTEID");
var DIstance = document.querySelector("#DISTANCE");


// data store in database from the form ========================

document.getElementById('submit').addEventListener("click", function () {
  var DRIVERname = username.value;
  var Signupdriver = signupdate.value;
  var emailId = EMail.value;
  var MobileNo = mobile.value;
  var routeOri = Origin.value;
  var RouteDesti = DEstination.value;
  var ROUTEId = routeId.value;
  var Routedistance = DIstance.value;
  db.doc().set({
    Name: DRIVERname,
    Email: emailId,
    Phone: MobileNo,
    SignupDate: Signupdriver,
    destination: RouteDesti,
    distance: Routedistance,
    origin: routeOri,
    route_no: ROUTEId
  }).then(function () {
    console.log("data saved");
  }).catch(function (error) {
    console.log(error);
  });
});