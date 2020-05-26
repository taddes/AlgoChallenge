def selection_sort(arr):
    for i in range(len(arr)):
        index_of_min = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[index_of_min]:
                index_of_min = j
        if index_of_min != i:
            arr[i], arr[index_of_min] = arr[index_of_min], arr[i]
    return arr


test_arr = [10, -30, 97, 0, 5]
print(selection_sort(test_arr))