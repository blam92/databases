var db = require('../db');
var Promise = require('bluebird');
module.exports = {
  messages: {
    get: function () {
    	var q = `SELECT username, roomname, message, created_at FROM messages`;

    	return new Promise((resolve, reject) => {
    		db.connection.query(q, (err, result) => {
    			if(err) {
    				console.log('error in query', err);
    				reject(err);
    			} else {
    				resolve(result);
    			}
    		});
    	});

    }, // a function which produces all the messages
    post: function (message, user, room) {
        console.log('message: ', message, 'user:', user, 'room:', room);
    	var q = `INSERT INTO messages (username, roomname, message, created_at)
    								VALUES ('${user}', '${room}', '${message}', CURDATE())`

        return new Promise((resolve, reject) => {
            db.connection.query(q, (err, result) => {
                if(err) {
                    console.log('error in post query', err);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};