from queue import Queue

q = Queue()

q.put('a')
q.put('b')
q.put('c')

print(f'Full: {q.full()}')