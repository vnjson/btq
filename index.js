const token = '1698840285:AAG4G-g44xOE7YNiBsxsTRPIguOSnh_A4V8';
var bodyParser = require('body-parser')
//console.log(process.env.TOKEN)
const options = {

       polling: true
    };
const
	TelegramBot 			= require('node-telegram-bot-api');


const bus = require('./bot/bus');
const botVnjson = require('./bot/index')();
//const express = require('express');
//app = express();
//app.use(bodyParser.urlencoded({ extended: false }))


//app.use(bodyParser.json())
const	bot = new TelegramBot(token, options);

/**
 * В принципе это ведь
 */



bot.onText(/\/start/, async function(message){

	bus.emit('/start', bot, message)

})
/*
bot.onText(/\/next/, async function(message) {

	bus.emit('/next', bot, message)

});
/*
bot.onText(/\/about/, (message)=>{

const msg = `
Автор: <b>Касин Сергей</b>:&#8195; 
Powered by <a href="https://vnjson.github.io"> VNJSON</a>&#8195; 
`;


bot.sendMessage(message.chat.id, msg,{
  	 "parse_mode": "HTML"
  });

}) */
/*

var url = 'https://9a01843aea7e.ngrok.io'

bot.setWebHook(`${url}/bot${token}`);

const rthw = `/bot${token}`
app.post(rthw ,(req, res) =>{
	bot.processUpdate(req.body);
	res.sendStatus(200);
});
app.get('*', (req, res)=>{
res.send('Error 404')
})

app.listen(3004)
*/
//https://api.telegram.org/bot1698840285:AAG4G-g44xOE7YNiBsxsTRPIguOSnh_A4V8/setWebhook?url=https://9a01843aea7e.ngrok.io/bot1698840285:AAG4G-g44xOE7YNiBsxsTRPIguOSnh_A4V8