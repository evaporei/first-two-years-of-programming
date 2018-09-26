import random
import sys
import os

#FOR
for i in range(0, 10):
    print(i, " ", end="")

print(i)#i can be used out of the scope

grocery_list = ["Juice", "Tomatoes", "Potatoes", "Bananas"]

for x in grocery_list:
    print(x)


for y in [2,4,6,8,10]:
    print(y)

num_list = [[1,2,3],[10,20,30],[100,200,300]]

for x in range(0,3):
    for y in range(0,3):
        print(num_list[x][y])


two_dimensional = [grocery_list, ['Monkey', 'Gorilla', 'Shark']]

for i in range(0, len(two_dimensional)):
    for j in range(0, len(two_dimensional[i])):
                   print(two_dimensional[i][j])
                   

#WHILE
i = 0
while (i < 10):
    i += 1
    print("jesus")

#generates a random number between 0 and 100
random_num = random.randrange(0,100)

while(random_num != 15):
    print(random_num)
    random_num = random.randrange(0,100)

v = 0
while(v < 5):
    print(v)
    if v == 4:
        break
    else:
        v += 1

