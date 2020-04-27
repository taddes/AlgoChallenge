class Queue:
    def __init__(self):
        self.data = []

    def add(self, record):
        self.data.insert(len(self.data), record)
    
    def remove(self):
        del self.data[0]

myq = Queue()

print(myq.data)
myq.add(1)
myq.add(33)
print(myq.data)
myq.remove()
print(myq.data)