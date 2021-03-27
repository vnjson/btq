
module.exports = function (){

	this.on('*', function (event){
		  if(event==='exec'){

  		}else{
   		 console.error(`Плагин [ ${event} ] не зарегистрирован`)
  		}
	})
}