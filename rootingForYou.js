const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'redness'

function judgeVegetable(vegetables, metric) {
  this.num = metric;
  let items = vegetables.sort(function (a, b) { return b[this.num] - a[this.num] })
  return items[0].submitter;
}
console.log(judgeVegetable(vegetables, metric));
