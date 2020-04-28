class Queue:
    def __init__(self, data=[]):
        self.data = data

    def add(self, record):
        self.data.insert(len(self.data), record)
    
    def remove(self):
        del self.data[0]