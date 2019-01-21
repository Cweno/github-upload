module.exports = function(robot){
	byes = ['adios', 'cuidate', 'nos vemos', 'que descanses']
	return robot.hear(/(bye||see?you)/i, function(res){
		res.send(byes[Math.floor((Math.random()*byes.length))]);
	})
}
