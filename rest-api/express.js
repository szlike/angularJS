var express = require('express'),
  	mongoskin = require('mongoskin'),
  	bodyParser = require('body-parser') ;

//After the version 3.x (this of course includes v4), 
//Express.js streamlines the instantiation of its app instance, 
//this line will give us a server object:
var app = express();;

app.use(bodyParser());

var db = mongoskin.db('mongodb://@localhost:27017/mydb', {safe:true});

app.param('collectionName', function(req, res, next, collectionName){
  req.collection = db.collection(collectionName);
  return next();
});

app.get('/', function(req, res) {
  res.send('please select a collection, e.g., /collections/messages');
});

app.get('/collections/:collectionName', function(req, res, next) {
  req.collection.find({} ,{limit:10, sort: [['_id',-1]]}).toArray(function(e, results){
    if (e) return next(e);
    res.send(results);
  });
});

app.post('/collections/:collectionName', function(req, res, next) {
  req.collection.insert(req.body, {}, function(e, results){
    if (e) return next(e)
    res.send(results);
  });
});

app.get('/collections/:collectionName/:id', function(req, res, next) {
  req.collection.findById(req.params.id, function(e, result){
    if (e) return next(e)
    res.send(result);
  });
});


app.put('/collections/:collectionName/:id', function(req, res, next) {
  req.collection.updateById(req.params.id, {$set:req.body}, {safe:true, multi:false}, function(e, result){
    if (e) return next(e)
    res.send((result===1)?{msg:'success'}:{msg:'error'});
  });
});

app.del('/collections/:collectionName/:id', function(req, res, next) {
  req.collection.remove({_id: req.collection.id(req.params.id)}, function(e, result){
    if (e) return next(e)
    res.send((result===1)?{msg:'success'}:{msg:'error'});
  });
});

app.listen(3000);


