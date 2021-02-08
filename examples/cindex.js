var des= document.getElementById("des");
var content= document.getElementById("content")
//var imgs=document.getElementById("imgs").getAttribute("src");
document.getElementById("depots").addEventListener("click", function() {
    content.innerHTML="<div>Highest Buses :North Division<br> Lowest Buses :Central Division</div>"

    document.getElementById("imgs").setAttribute("src","../assets/img/bus_divisions.jpeg");
   
    //console.log("done");
  });
  document.getElementById("a+").addEventListener("click", function() {
    document.getElementById("imgs").setAttribute("src","../assets/img/a+.png");
    des.innerHTML="<div>Grade: A+</div><br><div>Best connectivity</div>"
    content.innerHTML=""
    //console.log("done");
  });
  document.getElementById("a").addEventListener("click", function() {
    document.getElementById("imgs").setAttribute("src","../assets/img/A-.png");
    des.innerHTML="<div>Grade: A</div><br>"
    content.innerHTML=""
    //console.log("done");
  });
  document.getElementById("b+").addEventListener("click", function() {
    document.getElementById("imgs").setAttribute("src","../assets/img/b+.png");
    des.innerHTML="<div>Grade: B+</div><br>"
    content.innerHTML=""
    //console.log("done");
  });
  document.getElementById("b").addEventListener("click", function() {
    document.getElementById("imgs").setAttribute("src","../assets/img/b-.png");
    des.innerHTML="<div>Grade: B</div><br>"
    content.innerHTML=""
    //console.log("done");
  });
  document.getElementById("c+").addEventListener("click", function() {
    document.getElementById("imgs").setAttribute("src","../assets/img/c+.png");
    des.innerHTML="<div>Grade: C+</div><br>"
    content.innerHTML=""
    //console.log("done");
  });
  document.getElementById("c").addEventListener("click", function() {
    document.getElementById("imgs").setAttribute("src","../assets/img/c-.png");
    des.innerHTML="<div>Grade: C</div><br>"
    content.innerHTML=""
    //console.log("done");
  });
  document.getElementById("d+").addEventListener("click", function() {
    document.getElementById("imgs").setAttribute("src","../assets/img/d+.png");
    des.innerHTML="<div>Grade: D+</div><br>"
    content.innerHTML=""
    //console.log("done");
  });
  document.getElementById("d").addEventListener("click", function() {
    document.getElementById("imgs").setAttribute("src","../assets/img/d-.png");
    des.innerHTML="<div>Grade: D</div><br><div>Worst connectivity</div>"
    content.innerHTML=""
    //console.log("done");
  });
  document.getElementById("busy").addEventListener("click", function() {
    document.getElementById("imgs").setAttribute("src","../assets/img/busiest.png");
    des.innerHTML="<div>Busiest Route</div><br>"
    content.innerHTML=""
    //console.log("done");
  });