function Note(game, ctx, note, x, y, radius, color) {
	Entity.call(this, game, x, y);
	this.radius = radius;
	this.color = color || "rgba(255,255,255,0)";
	this.note = note;
	this.ctx = ctx;
}

Note.prototype = new Entity();
Note.prototype.constructor = Note;

Note.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.fillStyle = this.color;
	ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
}

Note.prototype.play = function() {
	new Audio("piano/" + piano[this.note + 6]).play();
}

var piano = [
"Piano.mf.G3.mp3",
"Piano.mf.Ab3.mp3",
"Piano.mf.A3.mp3",
"Piano.mf.Bb3.mp3",
"Piano.mf.B3.mp3",
"Piano.mf.C4.mp3",
"Piano.mf.Db4.mp3",
"Piano.mf.D4.mp3",
"Piano.mf.Eb4.mp3",
"Piano.mf.E4.mp3",
"Piano.mf.F4.mp3",
"Piano.mf.Gb4.mp3",
"Piano.mf.G4.mp3",
"Piano.mf.Ab4.mp3",
"Piano.mf.A4.mp3",
"Piano.mf.Bb4.mp3",
"Piano.mf.B4.mp3",
"Piano.mf.C5.mp3",
"Piano.mf.Db5.mp3",
"Piano.mf.D5.mp3",
"Piano.mf.Eb5.mp3",
"Piano.mf.E5.mp3",
"Piano.mf.F5.mp3",
"Piano.mf.Gb5.mp3",
"Piano.mf.G5.mp3",
];