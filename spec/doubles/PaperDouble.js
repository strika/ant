function PaperDouble() {
}

PaperDouble.prototype.rect = function(x, y, width, height) {
  return new RectDouble();
};

function RectDouble() {
}

RectDouble.prototype.attr = function(attribute, value) {
};
