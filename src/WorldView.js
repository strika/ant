function WorldView(world, paper) {
  this.world = world;
  this.paper = paper;
}

WorldView.prototype.paint = function() {
  var paper = this.paper;
  _.each(this.world.getLiveCells(), function(cell) {
    var x = cell[0] * 5;
    var y = cell[1] * 5;
    cellView = paper.rect(x, y, 5, 5);
    cellView.attr("fill", "#222");
  });
};
