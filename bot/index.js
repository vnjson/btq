const { join } = require('path');

const jumpVnjson = require('./plugins/jump');
const characterVnjson = require('./plugins/character');

const bus = require('./bus');
const	Vnjson = require('./vnjson.js');
const vnjs = new Vnjson();



vnjs.use(jumpVnjson)
vnjs.use(characterVnjson)

vnjs.use(function (){
	this.on('menu', data=>{

		var keys = Object.keys(data)
		
		this.emit('jump', keys[2])
	})
})

const game = require('./vn.json');


vnjs.setTree(game.TREE);




vnjs.on('init', scene=>{
	console.log(`[ ${vnjs.current.sceneName} | ${vnjs.current.labelName} ]`)
	vnjs.exec()
	
})



module.exports = function (){

bus.on('/start', (bot, message)=>{
	bus.emit('event', bot, message);
	vnjs.emit('jump', game.entry);
	setInterval(function (){

		vnjs.next()
	}, 500)
})
/*
bus.on('/next', (bot, message)=>{
	vnjs.next();
	bus.emit('event', bot, message);

})
*/

}