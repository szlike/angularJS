
var Nerd = require('./models/nerd');
var User = require('./models/user');
var Rating = require('./models/rating');

module.exports = function(app, router) {

	app.use('/api', router);	

	router.use(function(req, res, next) {
		console.log('Something is happening.');
		next(); // make sure we go to the next routes and don't stop here
	});

	router.get('/', function(req, res) {
		res.json({ message: 'hooray! welcome to our api!' });	
	});

	router.route('/myProfile')
	// create a bear (accessed at POST http://localhost:8080/api/myProfile)
	// get all the myProfile (accessed at GET http://localhost:8080/api/myProfile)
	.get(function(req, res) {
		console.log("read myProfile");
		Rating.find(function(err, rating) {
			if (err)
				res.send(err);

			res.json(rating);
		});
	});
	// update by ID
	//http://localhost:8080/api/myProfile/547c6ba074e9da1ecc8c63fe
	router.route('/myProfile/:rid')
	.put(function(req, res) {
		//console.log(req.params.data);
		Rating.findById(req.params.rid, function(err, rating) {
			//console.log("I am body " + req.body[0].rate);
			if (err)
				res.send(err);
			if (rating != null){
				console.log("1 " + req.body.skillrating);
				rating.skillrating = req.body.skillrating; 	// update the bears info

				// save the bear
				rating.save(function(err) {
					if (err)
						res.send(err);

					res.json({ message: 'rating updated!' });
				});
			}
		});
	});

	router.route('/mannualCreate')
		.get(function(req, res) {
		console.log("add data");
		var rating = new Rating();
		if (rating != null){
			rating = {"skillrating":[
								{"skill":"Java", "rate":"0"},
								{"skill":"C++", "rate":"0"},
								{"skill":"SQL", "rate":"0"},
								{"skill":"Javascript", "rate":"0"},
								{"skill":"Python", "rate":"0"}]};
			rating.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'rating created!'+rating._id });
			});
		}
	});


//db.ratings.insert({skillrating : [ {"Java":"5"}, {"C++":"5"}, {"C":"5"}, {"SQL":"5"}, {"Javascript":"5"} ]})
	router.route('/mannualUpdate/:rid')
		.get(function(req, res) {
		// use our bear model to find the bear we wantn
		console.log("mannualUpdate");
		//var rating = new Rating(); 
		Rating.findById(req.params.rid, function(err, rating) {

			if (err)
				res.send(err);
			
			if (rating != null){
				rating.skillrating=[
							{"skill":"Java", "rate":"0"},
							{"skill":"C++", "rate":"0"},
							{"skill":"SQL", "rate":"0"},
							{"skill":"Javascript", "rate":"0"},
							{"skill":"OO design", "rate":"0"} ];
			// save the bear
				console.log(rating);
				rating.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'rating updated!' });
			});
		}
		});
	});


	router.route('/myProfile')
	// create a bear (accessed at POST http://localhost:8080/api/myProfile)
	// get all the myProfile (accessed at GET http://localhost:8080/api/myProfile)
	.get(function(req, res) {
		console.log("find data");
		Rating.find(function(err, rating) {
			if (err)
				res.send(err);

			res.json(rating);
		});
	});


	//get all entry
	router.get('/collections/:collectionName', function(req, res, next) {
		console.log('big thing is happening.');
	  	app.collection.find({} ,{limit:10, sort: [['_id',-1]]}).toArray(function(e, results){
	    if (e) return next(e);
	    console.log("res"+results);
	    res.send(results);
	  });
	});

    app.get('/api/nerds', function(req, res) {
            // use mongoose to get all nerds in the database
	    Nerd.find(function(err, nerds) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
            if (err)
                res.send(err);
            res.json(nerds); // return all nerds in JSON format
        });
    });

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

	//CRUD operation
	app.param('collectionName', function(req, res, next, collectionName){
	  req.collection = db.collection(collectionName);
	  return next();
	});

	
	//insert
	app.post('/collections/:collectionName', function(req, res, next) {
	  req.collection.insert(req.body, {}, function(e, results){
	    if (e) return next(e);
	    console.log(results);
	    res.send(results);
	  });
	});

	//get by id
	app.get('/collections/:collectionName/:id', function(req, res, next) {
	  req.collection.findById(req.params.id, function(e, result){
	    if (e) return next(e)
	    res.send(result);
	  });
	});
	//update
	app.put('/collections/:collectionName/:id', function(req, res, next) {
	  req.collection.updateById(req.params.id, {$set:req.body}, {safe:true, multi:false}, function(e, result){
	    if (e) return next(e)
	    res.send((result===1)?{msg:'success'}:{msg:'error'});
	  });
	});
	//delete
	app.del('/collections/:collectionName/:id', function(req, res, next) {
	  req.collection.remove({_id: req.collection.id(req.params.id)}, function(e, result){
	    if (e) return next(e)
	    res.send((result===1)?{msg:'success'}:{msg:'error'});
	  });
	});


};
	


//};