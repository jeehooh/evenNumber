let arr = [];

function findEvenNumber(num) {
  for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
      arr.push(i);
    }
  }
  return arr;
}
