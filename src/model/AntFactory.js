function AntFactory(world) {
  this.world = world;
}

AntFactory.prototype.buildRandomAnt = function() {
  var x = this.randomCoordinate(),
      y = this.randomCoordinate(),
      direction = this.randomDirection();

  return new Ant(this.world, x, y, direction);
};

AntFactory.prototype.randomCoordinate = function() {
  return Math.round(Math.random() * 40);
};

AntFactory.prototype.randomDirection = function() {
  var r = Math.random();

  if (r < 0.25) {
    return "up";
  } else if (r < 0.5) {
    return "right";
  } else if (r < 0.75) {
    return "down";
  } else {
    return "left";
  }
};
