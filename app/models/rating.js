// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// {
// "skillrating" :[
// 	{"Java":"5"},
// 	{"C++":"5"},
// 	{"C":"5"},
// 	{"SQL":"5"},
// 	{"Javascript":"5"}
// ]}
var ratingSchema = new Schema({skill:String, rate: Number});
var ratingsSchema = new Schema({skillrating:[ratingSchema]});
ratingsSchema.set('autoIndex', false);
// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('rating', ratingsSchema);