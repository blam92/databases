var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (req, res) {
    	var statusCode = 200;
    	res.writeHead(statusCode, headers);  

    	models.messages.get().then((result) => {
    		console.log('before sending response: ',result);
    		result = result.map((val) => {
    			return {username: val.user,
    							roomname: val.room,
    							text: val.message}
    		});
    		res.end(JSON.stringify({results: result}));
    	});
    	
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

