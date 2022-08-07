function findLargeNumArray(arr) {
  let largeNum = 0;
  for (const arrItem of arr) {
    if (Math.max(...arrItem) > largeNum) {
      largeNum = Math.max(...arrItem);
    }
  }
  return largeNum;
}
console.log(
  findLargeNumArray([
    [3, 5, 9],
    [10, 2, 5],
    [3, 7, 6],
  ])
);

function findLargeNumArray1(arr) {
  return Math.max(...[].concat.apply([], arr));
}

console.log(
  findLargeNumArray1([
    [3, 5, 9],
    [10, 25, 5],
    [3, 7, 6],
  ])
);
