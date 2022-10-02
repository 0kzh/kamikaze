function facebook_pressed() {
  // Do something with...
  var username = document.getElementById('usernamefb').value;
  var password = document.getElementById('passwordfb').value;
  //window.alert(username + password);
}

function fb_login() {
  document.getElementById('fbStatus').innerHTML = "Status: Facebook Logged In";
  document.getElementById('toast1').style.background = "#FF002B";
  document.getElementById('fbLogButton').style.visibility = "hidden";
  document.getElementById('fbClose').click();
}

function twitter_pressed() {
  // Do something with...
  var username = document.getElementById('usernametw').value;
  var password = document.getElementById('passwordtw').value;
  //window.alert(username + password);
}

function tw_login() {
  document.getElementById('twStatus').innerHTML = "Status: Twitter Logged In";
  document.getElementById('toast2').style.background = "#FF002B";
  document.getElementById('twLogButton').style.visibility = "hidden";
  document.getElementById('twClose').click();
}

function gmail_pressed() {
  // Do something with...
  var password = document.getElementById('usernamegm').value;
  var username = document.getElementById('passwordgm').value;
  //window.alert(username + password);
}

function gm_login() {
  document.getElementById('gmStatus').innerHTML = "Status: Gmail Logged In";
  document.getElementById('toast3').style.background = "#FF002B";
  document.getElementById('gmLogButton').style.visibility = "hidden";
  document.getElementById('gmClose').click();
}

function wechat_pressed() {
  // Do something with...
  var username = document.getElementById('usernamewc').value;
  var password = document.getElementById('passwordwc').value;
  //window.alert(username + password);
}

function wc_login() {
  document.getElementById('wcStatus').innerHTML = "Status: WeChat Logged In";
  document.getElementById('toast4').style.background = "#FF002B";
  document.getElementById('wcLogButton').style.visibility = "hidden";
  document.getElementById('wcClose').click();
}

function FMU_pressed() {
  // Do the thing
}
document.getElementById('fbButton').addEventListener("click", facebook_pressed);
document.getElementById('twButton').addEventListener("click", twitter_pressed);
document.getElementById('gmButton').addEventListener("click", gmail_pressed);
document.getElementById('wcButton').addEventListener("click", wechat_pressed);
document.getElementById('FMU').addEventListener("click", FMU_pressed);
