function WorldView(world, paper) {
  this.world = world;
  this.paper = paper;
  this.cellSize = 16;

  this.world.observe(this);
}

WorldView.prototype.paintLiveCell = function(cell) {
 this.paintCell(cell, "#222");
};

WorldView.prototype.paintDeadCell = function(cell) {
  this.paintCell(cell, "#fff");
};

WorldView.prototype.paintCell = function(cell, color) {
    var x = cell[0] * this.cellSize,
        y = cell[1] * this.cellSize,
        cellView = this.paper.rect(x, y, this.cellSize, this.cellSize);

    cellView.attr("fill", color);
    cellView.attr("stroke-width", 0);
};

WorldView.prototype.notify = function(event) {
  if (event.eventName === "reviveCell") {
    this.paintLiveCell(event.cell);
  } else if (event.eventName === "killCell") {
    this.paintDeadCell(event.cell);
  }
};
