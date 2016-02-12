function NoteCreator(game, notes) {
	this.game = game;
	this.notes = [];
	var radius = this.game.circle.radius;
	this.ctx = new AudioContext();
	n = notes.length;
	for (var i = 0; i < n; i++) {
		var note = new Note(game, this.ctx, parseInt(notes[i]),
					(1/(n*n)+1) * radius * Math.cos(i * 2 * Math.PI / n - Math.PI / 2),
					(1/(n*n)+1) * radius * Math.sin(i * 2 * Math.PI / n - Math.PI / 2),
					Math.PI * radius / n);
		this.notes.push(note);
	}
}

NoteCreator.prototype = new Entity();
NoteCreator.prototype.constructor = NoteCreator;

NoteCreator.prototype.draw = function(ctx) {
	for (var i = 0; i < this.notes.length; i++) {
		ctx.save();
		this.notes[i].draw(ctx);
		ctx.restore();
	}
}