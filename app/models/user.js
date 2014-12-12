// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema ({
	name: String,
	education: String,
	employment: String,
	friendID : [{type:Number}],
	skillID : [{type:Number}]
});


// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('user', userSchema);