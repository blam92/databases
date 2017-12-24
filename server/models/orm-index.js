var ormDB = require('../db/index-orm');

console.log(ormDB);

exports.get = () => {
	return ormDB.Message.findAll();
}

exports.post = (message, user, room) => {
	
	return ormDB.Message.create({
		username: user,
		roomname: room,
		message: message
	});
}

