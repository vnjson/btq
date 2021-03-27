const { join } = require('path');
const fs = require("fs");



module.exports = function (vnjs, bot, message) {

vnjs.on('*', (event)=>{
  console.error(`Плагин [ ${event} ] не зарегистрирован`)
});
vnjs.on('exec', function (ctx){

});

var btnNext = [[ {text:"Далее", callback_data: "next"}]];

function clickHandler(msg){

bot.on('callback_query', function (res) {
  var pathname = res.data;

  if(pathname==='next'){
      vnjs.next();
  }else{
      vnjs.exec({jump: pathname})
  };
  bot.deleteMessage(message.chat.id, msg.message_id)
  bot.removeListener("callback_query");   

});
    
};

vnjs.on('print', (text)=>{

  bot.sendMessage(message.chat.id, text, {
  	 "parse_mode": "HTML",
     "reply_markup": {
          "inline_keyboard": btnNext,
          "resize_keyboard": true
       }
  }).then(clickHandler)
});



vnjs.on('character', (character, reply)=>{


  bot.sendMessage(message.chat.id, `<b>${character.text}</b>:&#8195; ${reply}`,{
  	 "parse_mode": "HTML",
     "reply_markup": {
          "inline_keyboard": btnNext,
          "resize_keyboard": true
       }
  }).then(clickHandler)
});




/**
 * MENU
 */

vnjs.on('menu', (menu)=>{

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
       "inline_keyboard": keyboard
       }
    })
.then(clickHandler)
})//MENU


/*
vnjs.on('show', function (name){


this.assetsPath.forEach((asset)=>{

		 if(asset.name===name){
      const stream = fs.createReadStream(asset.url);
		 	bot.sendPhoto(message.chat.id, stream);
		 }
});


});

*/


/**
 * VOICE
 */
/*
vnjs.on('audio', function(name){

this.assetsPath.forEach((asset)=>{

     if(asset.name==name){
      const stream = fs.createReadStream(asset.url);

        bot.sendAudio(message.chat.id, stream);

     }
});

*/
//});//audio

/**
 * Memory Card
 *//*
const userData = {
	scores: 0,
	currentLabelName: vnjs.currentLabelName,
	index: vnjs.index

}
vnjs.on('point', function (point){}
//scores
/**
 * Очки будем запоминать в localStorage
 * Вместе с позицией... Хотя. это же месседжер
 * а не браузер. Надо думать что то другое.
 * Скорее всего писать в файл.
 */
/**
 * memoryCard.scores.setPoints(point)
 */

/*

userData.scores +=point;
  console.log(userData)
});

 fs.writeFile("./memory-card.json", JSON.stringify(userData, null, 2), err => {
    if (err) console.log("Error writing file:", err);
  });
*/


}
