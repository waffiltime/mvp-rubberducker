const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rubberduck');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection success');
});

let messageSchema = mongoose.Schema({
  incmessage: {type: String, unique: true}
  respmessage: {type: String, unique: true}
});


let Message = mongoose.model('Message', contractSchema);


let save = (thing) => {
  console.log('thing =', thing);
  if(thing.body.message) {
    let newMessage = new Message({
      message: thing.body.message
    })
    message.save(function(err, message) {
      if(err) {
        return console.error(err);
      } else {
        console.log('Message ' + thing.body.message + ' saved');
      }
    })
  }
}


let find = (thing) => {
  
}
module.exports.save = save;