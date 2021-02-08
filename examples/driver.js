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
  var firestore =firebase.firestore();
  const db =firestore.collection("driverData");
  var username = document.querySelector("#emailField");
   var Password = document.querySelector("#passwordField");

   // data store in database from the form ========================
   // submit.addEventListener("click",function(){
   // 	var emailId =username.value;
   // 	var PasswordID = Password.value;
   // 	db.doc().set({
   // 		username:emailId ,
   // 		password:PasswordID
   // 	}).then(function(){
   // 		console.log("data saved");
   // 	}).catch(function(error){
   // 		console.log(error);
   // 	})
   // });

   //data retrieve========================
   db.get().then(snapshot=>{
   	// console.log(snapshot);
   	getInfo(snapshot.docs);
   });
   var html=" ";
   var el= document.getElementById("Table");
   function getInfo(data){
   	data.forEach(doc=>{
   		var info =doc.data();
   		// console.log(info.username);
   		html +=" <tr class=\"active\">"
  		html +="<td  class=\"active\">"+info.Name+"</td>"
  		html +="<td class=\"success\">"+info.Email+"</td>	"
  		html +="<td class=\"warning\">"+info.Phone+"</td>"
  		html +="<td class=\"danger\">"+info.SignupDate+"</td>"
  		html +="<td class=\"info\">"+info.origin+"</td>"
  		html +="<th class=\"active\">"+info.destination+"</td>"
  		html +="<th class=\"success\">"+info.route_no+"</td>"
  		html +="<th class=\"warning\">"+info.distance+"</td>"
  						
  		html +="</tr>"
   	});
   	el.innerHTML =html;
   }
   function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("exampleInputName2");
  filter = input.value.toUpperCase();
  table = document.getElementById("Table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        // console.log("hi");
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
submit.addEventListener("click",function(){
  myFunction();
});
  //  var drivername = document.querySelector("#exampleInputName2");
  
  //  // console.log(DRIVERname);
  //  submit.addEventListener("click",function(){
  //    var DRIVERname= drivername.value;
  //   db.get().then(function(data){
  //   data.forEach(doc=>{
  //     var p= doc.data().username;
  //     // console.log(p);
  //   if(p == DRIVERname){

  //     console.log("driverfound");

  //   //   return;
  //        }
  //   // else{
  //   //   console.log("bad luck");
    
  //   // }
    
  //   });
  // });
  // // console.log("hi");
  // });
  
