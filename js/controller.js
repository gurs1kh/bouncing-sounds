function startController(game, num, size) {
	var canvas = document.getElementById("gameWorld");
	var numInput = document.getElementById("ballNum");
	var sizeInput = document.getElementById("ballSize");
	var scaleInput = document.getElementById("scale");
	var customScaleInput = document.getElementById("customScale");
	var updateBtn = document.getElementById("update");
	var clearBtn = document.getElementById("clear");
	
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
	
	clearBtn.onclick = function() {
		numInput.value = 0;
		updateBtn.onclick();
	}
	
	scaleInput.onchange = function() {
		var scale = scaleInput.value;
		if (scale == "custom") {
			customScaleInput.hidden = false;
		} else {
			customScaleInput.hidden = true;
		}
	}
	
	var line = game.line;
	mousedown = false;
	canvas.onmousedown = function(e) {
		mousedown = true;
		line.startX = e.layerX;
		line.startY = e.layerY;
	};
	
	canvas.onmousemove = function(e) {
		if (mousedown) {
		line.endX = e.layerX;
		line.endY = e.layerY;
		}
	}
	
	canvas.onmouseup = function(e) {
		mousedown = false;
		var x = line.startX - canvas.width / 2;
		var y = line.startY - canvas.height / 2;
		var ball = new Ball(game, parseInt(sizeInput.value), x, y);
		ball.velocity = {x: (line.startX - line.endX)/10,
						 y: (line.startY - line.endY)/10};
		game.addEntity(ball);
		game.balls.push(ball);
		numInput.value++;
		line.startX = line.startY = line.endX
					= line.endY = null;
	}
}