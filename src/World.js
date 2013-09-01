function World() {
  this.liveCells = [];
}

World.prototype.getLiveCells = function() {
  return this.liveCells;
};

World.prototype.isCellAlive = function(x, y) {
  return _.any(this.liveCells, function(cell) {
    return cell[0] === x && cell[1] === y;
  });
};

World.prototype.isCellDead = function(x, y) {
  return !this.isCellAlive(x, y);
};

World.prototype.reviveCell = function(x, y) {
  if (this.isCellDead(x, y)) {
    this.liveCells.push([x, y]);
  }
};

World.prototype.killCell = function(x, y) {
  this.liveCells = _.reject(this.liveCells, function(cell) {
    return cell[0] === x && cell[1] === y;
  });
};

World.prototype.toggleCell = function(x, y) {
  if (this.isCellAlive(x, y)) {
    this.killCell(x, y);
  } else {
    this.reviveCell(x, y);
  }
};
