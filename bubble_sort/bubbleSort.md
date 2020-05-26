## Bubble Sort
* Simple implementation
* O(n^2)
* Indicates a loop running within a loop (O(n^2))
* Purpose is to find the largest element in the array and drag it over to the right side as quickly as side.
* Inner loop is like a shrinking window, decreasing in size as the largest elements bubble to the top.
* Even if array gets sorted early, the loops will continue running. There are logic checks you could do to catch completion.

Example:
From i = 0 < array length
    from j = 0 to (array length - i)
        if the element at j is greater than j+1
            Swap elements at j and j + 1
        else
            continue
```javascript
[10, -30, 97, 0, 5]

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < (array.length - i - 1); j++) {
        if (array[j] > array[j+1]) {
          const lesser = array[j+1];
          array[j+1] = array[j];
          array[j] = lesser;
        }
      }
    }
    return array;
}
```

```python
def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(len(arr) - i - 1):
            if j < arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
```