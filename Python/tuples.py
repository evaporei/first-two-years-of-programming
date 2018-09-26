import random
import os
import sys

#tuples are lists, but cannot be changes -> like a const array

pi_tuple = (3, 1, 4, 1, 5, 9)

#conversions
new_list = list(pi_tuple)
new_tuple = tuple(new_tuple)

print("pi_tuple: ", pi_tuple)
print("new_tuple: ", new_tuple)

#len(), max() and min() work as well in tuples
