function startController(game, num, size) {
	var numInput = document.getElementById("ballNum");
	var sizeInput = document.getElementById("ballSize");
	var scaleInput = document.getElementById("scale");
	var customScaleInput = document.getElementById("customScale");
	var updateBtn = document.getElementById("update");
	
	numInput.value = num;
	sizeInput.value = size;
	
	updateBtn.onclick = function() {
		var scale = scaleInput.value;
		if (scale == "custom") {
			scale = customScaleInput.value;
		}
		var notes = scale.split(",");
		game.notes.forEach(function(d) { d.removeFromWorld = true; });
		game.noteCreator.removeFromWorld = true;
		game.notes = [];

		game.noteCreator = new NoteCreator(game, notes);
		game.notes = game.noteCreator.notes;
		game.addEntity(game.noteCreator);
		
		game.balls.forEach(function(d){ d.removeFromWorld = true; });
		game.balls = [];
		num = parseInt(numInput.value);
		for (var i = 0; i < num; i++) {
			var ball = new Ball(game, parseInt(sizeInput.value));
			game.balls.push(ball);
			game.addEntity(ball);
		}
	}
	
	scaleInput.onchange = function() {
		var scale = scaleInput.value;
		if (scale == "custom") {
			customScaleInput.hidden = false;
		} else {
			customScaleInput.hidden = true;
		}
	}
}