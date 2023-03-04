function removeFromArray(array, deleteItem) {
  var i = 0;
  while (i < array.length) {
    if (array[i] === deleteItem) {
      array.splice(i, 1);
    } else {
      ++i;
    }
  }
  return array;
}

console.log(removeFromArray([1, 2, 3, 4], 3));
