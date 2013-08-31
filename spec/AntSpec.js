describe("Ant", function() {
  var ant;

  beforeEach(function() {
    ant = new Ant();
  });

  describe("#say", function() {
    it("says 'hello'", function() {
      expect(ant.say()).toEqual("hello");
    });
  });
});
