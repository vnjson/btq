const { join } = require('path');
const fs = require("fs");


const jump = require('./jump')(vnjs);


module.exports = function (vnjs, bot, message) {



vnjs.on('print', (text)=>{

  bot.sendMessage(message.chat.id, text, {
  	 "parse_mode": "HTML",
     "reply_markup": {
       "keyboard": [["/next"]],
       "resize_keyboard": true
       }
  });

})

vnjs.on('character', (character, reply)=>{


  bot.sendMessage(message.chat.id, `<b>${character.name}</b>:&#8195; ${reply}`,{
  	 "parse_mode": "HTML",
     "reply_markup": {
       "keyboard": [["/next"]],
       "resize_keyboard": true
       }
  });
 // bot.removeListener("messages"); 

});


/**
 * MENU
 */
function clickHandler(msg){

bot.on('callback_query', function (res) {
  var pathname = res.data;

vnjs.exec({jump: pathname})

 // bot.deleteMessage(message.chat.id, msg.message_id)
  //bot.removeListener("callback_query");   

});
    
};
vnjs.on('menu', menu=>{

const keyboard = [
       // [ {text:"Пункт меню", callback_data: "action"} ],
];

  for(var [ label, menuItem ] of Object.entries(menu)){
    if(label!=='?'){
 
        keyboard.push([{ text: menuItem, callback_data: label }]);
    }
  };

 bot.sendMessage(message.chat.id, `<b>${menu['?']}</b>`,{
    "parse_mode": "HTML",
    "reply_markup": {
       "inline_keyboard": keyboard,
       //"selective": true
       "one_time_keyboard": true
       }
    })
.then(clickHandler)
})//MENU


}


