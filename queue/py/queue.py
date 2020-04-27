class Queue:
    def __init__(self, data=[]):
        self.data = data

    def add(self, record):
        self.data.insert(len(self.data), record)
    
    def remove(self):
        del self.data[0]

myq = Queue([1,2,3,4])

print(myq.data)
myq.remove()
print(myq.data)
myq.add(5)
print(myq.data)