function Note(game, ctx, note, circle, n, i, color) {
	Entity.call(this, game, 0, 0);
	var radius = circle.radius;
	this.x = (1/(n*n)+1) * radius * Math.cos(i * 2 * Math.PI / n - Math.PI / 2),
	this.y = (1/(n*n)+1) * radius * Math.sin(i * 2 * Math.PI / n - Math.PI / 2),
	this.radius = Math.PI * radius / n;
	this.circle = circle;
	this.n = n;
	this.i = i;
	this.color = color || "rgba(255,255,255,0)";
	this.color = "rgb(" + Math.round(Math.random() * 255) + ", "
						+ Math.round(Math.random() * 255) + ", "
						+ Math.round(Math.random() * 255) + ")";
	this.note = note;
	this.ctx = ctx;
}

Note.prototype = new Entity();
Note.prototype.constructor = Note;

Note.prototype.draw = function(ctx) {
	ctx.strokeStyle = this.color;
	ctx.lineWidth = 10;
	var circle = this.circle;
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.radius,
			2 * Math.PI / this.n * this.i - Math.PI / 2 - Math.PI / this.n,
			2 * Math.PI / this.n * this.i - Math.PI / 2 + Math.PI / this.n, false);
	ctx.stroke();
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