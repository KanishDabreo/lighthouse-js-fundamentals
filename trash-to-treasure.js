const smartGarbage = function (trash, bins) {
  let keys = Object.keys(bins)
  for (let i of keys) {
    if (i === trash) {
      bins[i]++
    }
  }
  return bins;

}
smartGarbage("recycling", {
  waste: 4,
  recycling: 2,
  compost: 5
});
