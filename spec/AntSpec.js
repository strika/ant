describe("Ant", function() {
  var ant;

  beforeEach(function() {
    ant = new Ant();
  });

  describe("#getDirection", function() {
    it("returns 'up'", function() {
      expect(ant.getDirection()).toEqual("up");
    });
  });

  describe("#turnLeft", function() {
    describe("when direction is up", function() {
      it("turns ant left", function() {
        ant.turnLeft();
        expect(ant.getDirection()).toEqual("left");
      });
    });

    describe("when direction is left", function() {
      beforeEach(function() {
        ant.turnLeft();
        expect(ant.getDirection()).toEqual("left");
      });

      it("turns ant down", function() {
        ant.turnLeft();
        expect(ant.getDirection()).toEqual("down");
      });
    });

    describe("when direction is down", function() {
      beforeEach(function() {
        ant.turnLeft();
        ant.turnLeft();
        expect(ant.getDirection()).toEqual("down");
      });

      it("turns ant right", function() {
        ant.turnLeft();
        expect(ant.getDirection()).toEqual("right");
      });
    });

    describe("when direction is right", function() {
      beforeEach(function() {
        ant.turnRight();
        expect(ant.getDirection()).toEqual("right");
      });

      it("turns ant up", function() {
        ant.turnLeft();
        expect(ant.getDirection()).toEqual("up");
      });
    });
  });

  describe("#turnRight", function() {
    describe("when direction is up", function() {
      it("turns ant right", function() {
        ant.turnRight();
        expect(ant.getDirection()).toEqual("right");
      });
    });

    describe("when direction is left", function() {
      beforeEach(function() {
        ant.turnLeft();
        expect(ant.getDirection()).toEqual("left");
      });

      it("turns ant up", function() {
        ant.turnRight();
        expect(ant.getDirection()).toEqual("up");
      });
    });

    describe("when direction is down", function() {
      beforeEach(function() {
        ant.turnLeft();
        ant.turnLeft();
        expect(ant.getDirection()).toEqual("down");
      });

      it("turns ant left", function() {
        ant.turnRight();
        expect(ant.getDirection()).toEqual("left");
      });
    });

    describe("when direction is right", function() {
      beforeEach(function() {
        ant.turnRight();
        expect(ant.getDirection()).toEqual("right");
      });

      it("turns ant down", function() {
        ant.turnRight();
        expect(ant.getDirection()).toEqual("down");
      });
    });
  });
});
