"""
    Implementation of Bubble Sort
"""

def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(len(arr) - i - 1):
            if j < arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    print(arr)
    return arr




test_arr_1 = [14, 78, 2587, 3, 687, 21]
test_arr_2 = [85, 14, 36, 6 , 18, 55]

bubble_sort(test_arr_1)