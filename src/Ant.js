function Ant() {
  this.direction = "up";
  this.directions = ["up", "right", "down", "left", "up", "right", "down", "left"];
}

Ant.prototype.getDirection = function() {
  return this.direction;
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

Ant.prototype.getCurrentDirectionIndex = function() {
  return _.indexOf(this.directions, this.direction);
};
