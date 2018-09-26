import random
import sys
import os

#dictionaries/maps are arrays of keys and values

super_heroes = {"Batman" : "Bruce Vayne",
                "Superman" : "Clark Kent",
                "Green Arrow" : "Oliver Queen"}

print(type(super_heroes))#shows that it is an instance of the 'dict' class

#also you can't join two or more dictionaries like -> concat = dict1 + dict2

print(super_heroes['Batman'])

del super_heroes['Superman']#it needs to be the key

print(super_heroes)

super_heroes["Batman"] = "Bruce Wayne"

print(super_heroes.get('Green Arrow'))

print(super_heroes.keys())
print(super_heroes.values())
