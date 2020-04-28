from queue import Queue

myq = Queue([1,2,3,6])
print(myq.data)

myq2 = Queue([4,5,6])

def weave_queues(q_one, q_two):
    if len(q_one.data) != len(q_two.data):
        while len(q_one.data) < len(q_two.data):
            q_one.data.append(0)
    elif len(q_two.data) != len(q_one.data):
        while len(q_two.data) < len(q_one.data):
            q_two.data.append(0)
    return [ item for item in (zip(q_one.data, q_two.data))]

print(weave_queues(myq, myq2))