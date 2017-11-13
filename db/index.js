const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rubberduck');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection success');
});

let messageSchema = mongoose.Schema({
  incmessage: {type: String, unique: true, sparse: true},
  respmessage: {type: String, unique: true, sparse: true}
});


let Message = mongoose.model('Message', messageSchema);


let save = (thing) => {
  
  let newMessage = new Message({
    incmessage: thing.body.message
  })
  newMessage.save(function(err, message) {
    if(err) {
      return console.error(err);
    } else {
      console.log('Message ' + thing.body.message + ' saved');
    }
  })
}


let find = (thing, callback) => {
  Message.find(thing, callback);
};

module.exports.save = save;
module.exports.find = find;