describe("Ant", function() {
  var x = 1;
  var y = 2;
  var ant, world;

  beforeEach(function() {
    world = new World();
    ant = new Ant(world, x, y);
  });

  describe("#getDirection", function() {
    it("returns 'up'", function() {
      expect(ant.getDirection()).toEqual("up");
    });
  });
  
  describe("#getLocation", function() {
    it("returns ants location", function() {
      expect(ant.getLocation()).toEqual([x, y]);
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

  describe("#moveForward", function() {
    describe("when direction is up", function() {
      it("moves ant up", function() {
        ant.moveForward();
        expect(ant.getLocation()).toEqual([x - 1, y]);
      });
    });

    describe("when direction is left", function() {
      beforeEach(function() {
        ant.turnLeft();
        expect(ant.getDirection()).toEqual("left");
      });

      it("moves ant left", function() {
        ant.moveForward();
        expect(ant.getLocation()).toEqual([x, y - 1]);
      });
    });

    describe("when direction is down", function() {
      beforeEach(function() {
        ant.turnLeft();
        ant.turnLeft();
        expect(ant.getDirection()).toEqual("down");
      });

      it("moves ant down", function() {
        ant.moveForward();
        expect(ant.getLocation()).toEqual([x + 1, y]);
      });
    });

    describe("when direction is right", function() {
      beforeEach(function() {
        ant.turnRight();
        expect(ant.getDirection()).toEqual("right");
      });

      it("moves ant right", function() {
        ant.moveForward();
        expect(ant.getLocation()).toEqual([x, y + 1]);
      });
    });
  });
});
