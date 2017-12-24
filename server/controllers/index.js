var models = require('../models/orm-index');
var url = require('url');

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

    	models.get().then((result) => {
    		result = result.map((val) => {
    			return {username: val.username,
    							roomname: val.roomname,
    							text: val.message}
    		});
        result.push({username: 'first', text:'first cached message', roomname:'lobby'});
    		res.end(JSON.stringify({results: result}));
    	});
    	
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var statusCode = 201;
      res.writeHead(statusCode, headers);
      messageObj = '';
      req.on('data', (message) => {
        let q = url.parse(req.url + '/?' + message.toString(), true);
        messageObj = q.query;
      });

      req.on('end', () => {
        models.post(messageObj.text, messageObj.username, messageObj.roomname).then((result) => {
          console.log('message has been stored in DB');
          res.end('{}');
        });
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

