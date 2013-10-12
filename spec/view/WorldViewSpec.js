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

  describe("#paint", function() {
    beforeEach(function() {
      spyOn(paper, "rect").andCallThrough();
    });

    it("calls rect for each live cell", function() {
      worldView.paint();
      expect(paper.rect.calls.length).toEqual(2);
    });
  });

  describe("#paintLiveCell", function() {
    beforeEach(function() {
      spyOn(paper, "rect").andCallThrough();
    });

    it("paints the cell", function() {
      worldView.paintLiveCell([2, 2]);
      expect(paper.rect).toHaveBeenCalledWith(10, 10, 5, 5);
    });
  });

  describe("#paintDeadCell", function() {
    beforeEach(function() {
      spyOn(paper, "rect").andCallThrough();
    });

    it("paints the cell", function() {
      worldView.paintDeadCell([2, 2]);
      expect(paper.rect).toHaveBeenCalledWith(10, 10, 5, 5);
    });
  });
});
