var notes2 = [0,2,4,7,9,12];
var notes3 = [0,2,4,5,7,9,11,12];
var notes4 = [0,2,4,6,7,9,11,12];
var notes5 = [0,1,3,6,8,11,12];
var notes6 = [0,1,4,6,7,8,11,12];
var notes7 = [0,1,4,6,9,11,12];
var notes8 = [0,2,4,6,8,10,12];
var notes9 = [0,2,3,5,7,8,10,12];
//http://theremin.music.uiowa.edu/MISpiano.html

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