const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contracts');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection success');
});

let contractSchema = mongoose.Schema({
  contractaddress: {type: String, unique: true}
});

let userSchema = mongoose.Schema({
  username: {type: String, unique: true}
});

let Contract = mongoose.model('Contract', contractSchema);

let User = mongoose.model('User', userSchema);

//let waffiltime = new User({
// 	username: waffiltime
// })

let save = (thing) => {
  console.log('thing =', thing);
  if(thing.body.address) {
    let address = new Contract({
      contractaddress: thing.body.address
    })
    address.save(function(err, address) {
      if(err) {
        return console.error(err);
      } else {
        console.log('Address ' + thing.body.address + ' saved');
      }
    })
  } else if(thing.body.username) {
    let username = new User({
      username: thing.body.username
    })
    username.save(function(err, username) {
      if(err) {
        return console.error(err);
      } else {
        console.log('Username ' + thing.body.username + ' saved');
      }
    })
  }
}


let find = (thing) => {
  
}
module.exports.save = save;