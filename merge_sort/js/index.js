/* 
Create results array
while there are still elements in both arrays
    If the first element in the left half is less than the first
    in the right half:
        Shift the element from left into a result arr
    else
        Shift the element from right into a result arr
Take everything from the array that has stuff in it and put it 
in the results arr. AT this point, one of the arrays will be empty.
*/
function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right]
}




function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right))
}



module.exports = { mergeSort, merge };