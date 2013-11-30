describe("WorldView", function() {
  var paper;
  var world;
  var worldView;
  var liveCells;

  beforeEach(function() {
    paper = new PaperDouble();
    world = new World();

    liveCells = [[1, 1], [2, 2]];
    _.each(liveCells, function(cell) {
      world.reviveCell(cell[0], cell[1]);
    });

    worldView = new WorldView(world, paper);
  });

  describe("#paintLiveCell", function() {
    beforeEach(function() {
      spyOn(paper, "rect").andCallThrough();
    });

    it("paints the cell", function() {
      var x = 2,
          y = 2,
          size = worldView.cellSize;
      worldView.paintLiveCell([x, y]);
      expect(paper.rect).toHaveBeenCalledWith(x * size, y * size, size, size);
    });
  });

  describe("#paintDeadCell", function() {
    beforeEach(function() {
      spyOn(paper, "rect").andCallThrough();
    });

    it("paints the cell", function() {
      var x = 2,
          y = 2,
          size = worldView.cellSize;
      worldView.paintDeadCell([x, y]);
      expect(paper.rect).toHaveBeenCalledWith(x * size, y * size, size, size);
    });
  });
});
