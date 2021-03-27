const bus = require('../bus');


module.exports = function (){

bus.on('event', (bot, message) => {

function print (character, reply){

	//console.log(reply)

  bot.sendMessage(message.chat.id, reply, {
  	 "parse_mode": "HTML",
     "reply_markup": {
       "keyboard": [["/next"]],
       "resize_keyboard": true
       }
  });


}










//, bot, message

this.on('character', print)

});



};

