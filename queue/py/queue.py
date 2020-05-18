class Queue:
    def __init__(self, data=[]):
        self.data = data

    def add(self, record):
        self.data.append(record)
    
    def remove(self):
        return self.data.pop(0)

myq = Queue([1,2,3,4])

print(myq.data)
myq.remove()
print(myq.data)
myq.add(5)
print(myq.data)