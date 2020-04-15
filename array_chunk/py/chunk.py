"""
    --- Directions
    Given an array and chunk size, divide the array into many subarrays
    where each subarray is of length size
    --- Examples
    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
"""
# Solution 1
# def chunk_list(array, size):
#     chunked = []
#     for element in array:
#         if len(chunked) == 0:
#             last = chunked
#         else:
#             last = chunked[len(chunked) - 1]

#         if not last or len(last) == size:
#             chunked.append([element])
#         else:
#             last.append(element)
#     return chunked

# Solution 2
def chunk_list(array, size):
    chunked = []
    index = 0
    print(len(array), index)
    while index < len(array):
        chunked.append(array[index:size+index])
        index += size
    return chunked
        
print(chunk_list([1,2,3,4,5], 2))