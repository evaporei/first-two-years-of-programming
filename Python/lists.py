import os
import random
import sys

animals = ['Lion', 'Elephant', 'Mouse', 'Car']

animals[0] = "Restaurant"

print('First Item', animals[0])


print(animals)
print(animals[1:3])

another_list = ['heeehe', "haha", "huhu"]

list_inside_list = [animals, another_list]

print(list_inside_list)

print(list_inside_list[0][3])

another_list.append('Onions')

animals.insert(1, "Jesus")

print(animals)

animals.remove("Jesus")

animals.sort()
print(animals)
animals.reverse()
print(animals)


list_sum = animals + another_list

print(list_sum)

print("the size of the array now is", len(list_sum))

#max and min are for the biggest or the lowest in alphabet order

print(max(list_sum))
number_list = [5, 4, 7, 1]
print(min(number_list))#will return 1






















