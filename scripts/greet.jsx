module.exports = function(robot){
	hies = ['que tal?', 'como te va?', 'como estás?']
	return robot.hear(/(hola||hi)/i, function(res){
		let today = new Date();
		let hour = today.getHours();
		let msg = '';
		if (hour >= 6 && hour < 12){
        	msg = 'Buenos dias';
		}
		if (hour >= 12 && hour < 19){
        	msg = 'Buenas tardes';
		}
		if (hour >= 19 || hour < 6){
        	msg = 'Buenas noches';
		}
	res.send(msg + ', ' + hies[Math.floor((Math.random()*hies.length))]);
	})
}
