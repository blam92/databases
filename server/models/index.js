var db = require('../db');
var Promise = require('bluebird');
module.exports = {
  messages: {
    get: function () {
    	var q = `SELECT users.name AS user, messages.id, messages.message, messages.created_at, rooms.name AS room FROM messages
                INNER JOIN users ON users.id = messages.user_id
                INNER JOIN rooms ON rooms.id = messages.room_id`;

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
    	var qUser = `INSERT INTO messages (date, message, user_id, room_id)
    								VALUES (CURDATE(), ${message}, 1, 1)`
    }
    //NOTE: NEED TO FIGURE OUT HOW TO GET IDS OF ROOM AND USER FOR POST.
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};