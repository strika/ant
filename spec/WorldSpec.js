describe("World", function() {
  var world;

  beforeEach(function() {
    world = new World();
  });

  describe("#liveCells", function() {
    describe("with new world", function() {
      it("returns empty collection", function() {
        expect(world.getLiveCells()).toEqual([]);
      });
    });
  });

  describe("#reviveCell", function() {
    describe("when cell is not alive", function() {
      it("revives the cell", function() {
        world.reviveCell(1, 2);
        expect(world.getLiveCells()).toEqual([[1, 2]]);
      });
    });

    describe("when cell is already alive", function() {
      it("doesn't revive the cell again", function() {
        world.reviveCell(1, 2);
        world.reviveCell(1, 2);
        expect(world.getLiveCells()).toEqual([[1, 2]]);
      });
    });
  });

  describe("#killCell", function() {
    describe("when cell is alive", function() {
      it("kills the cell", function() {
        world.reviveCell(1, 2);
        world.killCell(1, 2);
        expect(world.isCellAlive(1, 2)).toBeFalsy();
      });
    });

    describe("when cell is not alive", function() {
      it("doesn't kill the cell again", function() {
        world.killCell(1, 2);
        expect(world.isCellAlive(1, 2)).toBeFalsy();
      });
    });
  });

  describe("#isCellAlive", function() {
    describe("when cell is alive", function() {
      it("returns true", function() {
        world.reviveCell(1, 2);
        expect(world.isCellAlive(1, 2)).toBeTruthy();
      });
    });

    describe("when cell is not alive", function() {
      it("returns false", function() {
        expect(world.isCellAlive(1, 2)).toBeFalsy();
      });
    });
  });

  describe("#isCellDead", function() {
    describe("when cell is alive", function() {
      it("returns false", function() {
        world.reviveCell(1, 2);
        expect(world.isCellDead(1, 2)).toBeFalsy();
      });
    });

    describe("when cell is not alive", function() {
      it("returns true", function() {
        expect(world.isCellDead(1, 2)).toBeTruthy();
      });
    });
  });
});
