module.exports = function towelSort (matrix) {
  if (!matrix || !(matrix instanceof Array)) return [];

 return  matrix.map((n, i) => !(i % 2) ? n : n.reverse()).flat(Infinity);
};

