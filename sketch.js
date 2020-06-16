var row = 25;
var col = 25;
var w, h;
var grid = new Array(col);

var src;
var dest;
var openList = [];
var visited = [];

function cell(i, j) {
	this.i = i;
	this.j = j;
	this.f = 0;
	this.h = 0;
	this.g = 0;

	this.show = function(col) {
		fill(col);
		noStroke();
		rect(this.i * w, this.y * h, w-1, h-1);
	}


}
function setup() {
	createCanvas(400, 400);
	w = width / col;
	h = height / row;
	for (var i = 0; i < col; i++) {
		grid[i] = new Array(row);
	}

	for (var i = 0; i <col; i++) {
		for (var j = 0; j < row; j++) {
			grid[i][j] = new cell(i, j);
		}
	}

	src = grid[0][0];
	dest = grid[col - 1][row -1];

	openList.push(src);
}

function draw() {
	if (openList.length > 0) {}
	else {}

	background(0);
	for (var i =0; i < col; i++) {
		for (var j = 0; j < row; j++) {
			grid[i][j].show(color(255));
		}
	}

	for (var i = 0; i < visited.length; i++) {
		visited[i].show(color(0, 255, 0));
	}

	for (var i = 0; i < openList.length; i++) {
		openList[i].show(color(255, 0, 0));
	}
	
}