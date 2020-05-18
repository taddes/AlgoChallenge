class Node: 
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_first(self, data):
        node = Node(data, self.head)
        self.head = node
    
    def __repr__(self):
        return str(self.head)

l = LinkedList()
l.insert_first(123)
print(l)