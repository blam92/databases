var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

exports.Message = db.define('message_orm', {
	username: Sequelize.STRING,
	roomname: Sequelize.STRING,
	message: Sequelize.STRING,
});

exports.Message.sync();