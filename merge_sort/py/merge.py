def merge(left, right):
    results = []

    while(len(left) and len(right)):
        if left[0] < right[0]:
            results.append(left.pop(0))
            print(left)
        else:
            results.append(right.pop(0))
            print(right)
    return [*results, *left, *right]

print(merge([3, 8, 12], [5, 10, 15]))


def merge_sort(arr):
    if len(arr) == 1:
        return arr

    center = len(arr) // 2
    print(center)
    left = arr[0: center]
    right = arr[center:]
    print(left, right)

    return merge(merge_sort(left), merge_sort(right))

print(merge_sort([22, 3, 15, 13, 822, 14, 15, 22, 75,]))