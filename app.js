const login = require("facebook-chat-api");
const fs = require('fs');
var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', function(req, res) {
  res.sendfile(path.join(__dirname+'/templates/index.html'));
});

app.post('/feecbok', express.bodyParser(), function(req, res) {
  console.log("post gotten");
  login({email: "calvinmcswole@protonmail.com", password: "hackmit2022"}, (err, api) => {
    if(err) return console.error(err);
    console.log("logged in");

    api.getFriendsList((err, data) => {
      if(err) return console.error(err);
  
      var randomFriend = data[Math.floor(Math.random()*data.length)];
      var friendID = randomFriend.userID;
  
      var conversation = pickMessage();
      var offset = 0;
      console.log(conversation);
      for(var i = 0; i < conversation.length; i++) {
        var message = conversation[i];
        console.log("sending: " + message);
        
        var timeout = 1200 * message.split(' ').length;
        const timeBetweenMessages = 600;
        offset += timeout + timeBetweenMessages;
        console.log(offset);

        var last = (i == conversation.length - 1)
        startMessage(api, message, friendID, offset, last);
      }
    });


    // api.listen((err, message) => {
    //     console.log("someone said" + message + " to me");
    //     api.sendMessage(message.body, message.threadID);
    // });
  });
})

function startMessage(api, message, id, delay, last) {
  var end = api.sendTypingIndicator(id, () => {
    sendMessageWithDelay(api, message, id, delay, end, last);
  });
}

function sendMessageWithDelay(api, message, id, delay, end, last) {
  api.sendTypingIndicator(id, undefined);
  console.log("sending message " + message + " with delay " + delay/1000 + " seconds.")
  setTimeout(() => {
    if(last) end()
    api.sendMessage(message, id);
    if(!last) api.sendTypingIndicator(id, undefined);
  }, delay);
}

function pickMessage(){
  let raw = fs.readFileSync('messages.json');
  let messages = JSON.parse(raw).messages;
  var randMsg = messages[Math.floor(Math.random()*messages.length)];
  return randMsg;
}

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);
