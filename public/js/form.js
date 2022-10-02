function facebook_pressed() {
  // Do something with...
  var username = document.getElementById('usernamefb').value;
  var password = document.getElementById('passwordfb').value;
  //fb_login();
  //window.alert(username + password);
}
function fb_login(){
  document.getElementById('fbStatus').innerHTML = "Status: Logged In";
  document.getElementById('toast1').style.background = "#FF002B";
}

function twitter_pressed() {
  // Do something with...
  var username = document.getElementById('usernametw').value;
  var password = document.getElementById('passwordtw').value;
  //window.alert(username + password);
}
function tw_login(){
  document.getElementById('twStatus').innerHTML = "Status: Logged In";
  document.getElementById('toast2').style.background = "#FF002B";
}
function gmail_pressed() {
  // Do something with...
  var password = document.getElementById('usernamegm').value;
  var username = document.getElementById('passwordgm').value;
  //window.alert(username + password);
}
function gm_login(){
  document.getElementById('gmStatus').innerHTML = "Status: Logged In";
  document.getElementById('toast3').style.background = "#FF002B";
}
function wechat_pressed() {
  // Do something with...
  var username = document.getElementById('usernamewc').value;
  var password = document.getElementById('passwordwc').value;
  //window.alert(username + password);
}
function wc_login(){
  document.getElementById('wcStatus').innerHTML = "Status: Logged In";
  document.getElementById('toast4').style.background = "#FF002B";
}

function FMU_pressed(){
  // Do the thing
}
document.getElementById('fbButton').addEventListener("click", facebook_pressed);
document.getElementById('twButton').addEventListener("click", twitter_pressed);
document.getElementById('gmButton').addEventListener("click", gmail_pressed);
document.getElementById('wcButton').addEventListener("click", wechat_pressed);
document.getElementById('FMU').addEventListener("click", FMU_pressed);
