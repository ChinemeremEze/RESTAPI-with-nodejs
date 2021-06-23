
//StAuth10065: I Ezeakudolu David Chinemerem, 000778050 certify that this material is my original work. No other person's work
//has been used without due acknowledgement. I have not made my work available to anyone else
const Database = require('./lib/database.js');
const express = require('express');

const app = express();
const db = new Database('./api.db');

app.get('/', function(req, res) {
      res.send("Hello World");
}); 
// get all messages
app.get('/messages', function(req, res) {
    let messages = db.get_messages();
    console.log(messages);
    messages.then((response) => {
        res.status(200);
        res.send(response);
    });
}); 

 // get a specific message
app.get('/messages/:id', function(req, res) { 
  let messages= db.get_message(req.params.id);
  messages.then((response) => {
      res.status(200);
      res.send(response);
  });
}); 
// update messages
app.put('/messages/', function(req, res) { 
  let messages= db.update_messages({"status":"Updated","message":"Updated message"});
  messages.then((response) => {
      res.status(200);
      res.send(response);
  });
});
// update a specific message
app.put('/messages/:id', function(req, res) { 
  let messages= db.update_message(req.params.id,{"status":"Warning", "message":"Overheating machine","timestamp":"2019-09-03T15:36:56.200"});
  messages.then((response) => {
      res.status(200);
      res.send(response);
  });
});

// add a message
app.post('/messages', function(req, res) { 
  let messages= db.add_message({"status":"Created","message":"This is the new created message"});
  messages.then((response) => {
      res.status(200);
      res.send(response);
  });
});

// delete all messages
app.delete('/messages', function(req, res) {
    let messages = db.delete_messages();
    messages.then((response) => {
        res.status(200);
        res.send(response);
    });
});

// delete a specific message
app.delete('/messages/:id', function(req, res) { 
  let messages = db.delete_message(req.params.id);
    messages.then((response) => {
        res.status(200);
        res.send(response);
    });
});

app.listen(3000, () => {
    console.log("server.js ready");
})