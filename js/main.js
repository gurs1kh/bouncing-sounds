// the "main" code begins here
window.onload = function() {
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');
	ctx.translate(canvas.width / 2, canvas.height / 2);
	
	var ballNum = 5;
	var ballRadius = 10;
	
    var game = new GameEngine();
	
	var radius = Math.min(canvas.height, canvas.width) / 2 - 10;
	var circle = new Circle(game, radius);
	game.addEntity(circle);
	game.circle = circle;
	
	var noteCreator = new NoteCreator(game, document.getElementById("scale").value.split(","));
	game.noteCreator = noteCreator;
	game.notes = noteCreator.notes;
	game.addEntity(noteCreator);
	
	game.balls = [];
	for (var i = 0; i < ballNum; i++) {
		var ball = new Ball(game, ballRadius);
		game.balls.push(ball);
		game.addEntity(ball);
	}
    
	game.init(ctx);
    game.start();
	
	startController(game, ballNum, ballRadius);
}