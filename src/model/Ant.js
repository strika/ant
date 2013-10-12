function Ant(world, x, y) {
  this.world = world;
  this.x = x;
  this.y = y;
  this.direction = "up";
  this.directions = ["up", "right", "down", "left", "up", "right", "down", "left"];
}

Ant.prototype.getDirection = function() {
  return this.direction;
};

Ant.prototype.getLocation = function() {
  return [this.x, this.y];
};

Ant.prototype.turnLeft = function() {
  var currentDirectionIndex = _.lastIndexOf(this.directions, this.direction);
  var nextDirectionIndex = currentDirectionIndex - 1;

  this.direction = this.directions[nextDirectionIndex];
};

Ant.prototype.turnRight = function() {
  var currentDirectionIndex = _.indexOf(this.directions, this.direction);
  var nextDirectionIndex = currentDirectionIndex + 1;

  this.direction = this.directions[nextDirectionIndex];
};

Ant.prototype.moveForward = function() {
  if (this.direction == "up") {
    this.y = this.y - 1;
  } else if (this.direction == "right") {
    this.x = this.x + 1;
  } else if (this.direction == "down") {
    this.y = this.y + 1;
  } else if (this.direction == "left") {
    this.x = this.x - 1;
  }
};

Ant.prototype.turn = function() {
  if (this.world.isCellDead(this.x, this.y)) {
    this.turnRight();
  } else {
    this.turnLeft();
  }
};

Ant.prototype.move = function() {
  this.turn();
  this.world.toggleCell(this.x, this.y);
  this.moveForward();
};
