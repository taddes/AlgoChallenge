## Selection Sort
* "prove me wrong algorithm"
* O(n^2)

From i = 0 to < array length
    **Assume** the element at i is the least in the array, assign i to indexOfMin
    For i from i + 1 to end of array:
        See if there is an element with a lower value
            If there is, record its index
        If the index of the current element and the index of the 'lowest' element is not the same, swap them.