console.log("loginForm.js loaded!");

function getUserData(){
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;

  if(user == "admin" && pass == "admin"){
    /*window.open("home.html", "_self");*/
    window.alert("This function is under construction")
  }else{
    error("Wrong Username and/or Password");
  }
}

function createUser(){
  error("This function is under construction");
}

function error(msg){
  document.getElementById("wmiddle").style.height = "225px";
  document.getElementById("error").style.display = "block";
  document.getElementById("error").innerHTML = msg;

  setTimeout(function(){
    document.getElementById("wmiddle").style.height = "200px";
    document.getElementById("error").style.display = "none";
  }, 3000);
}


/*Jquery*/
var angle = 0; var test = $('body');

function changeAngle() {
    angle = (angle + 5) % 360;
    test.css({
        'background': 'linear-gradient(' + angle + 'deg,#00ff6e,#00fff7)',
    });
}

setInterval(changeAngle, 100);