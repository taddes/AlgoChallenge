## Selection Sort
* "prove me wrong algorithm"
* O(n^2)

From i = 0 to < array length
    **Assume** the element at i is the least in the array, assign i to indexOfMin
    For i from i + 1 to end of array:
        See if there is an element with a lower value
            If there is, record its index
        If the index of the current element and the index of the 'lowest' element is not the same, swap them.

```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}
```