import random
import sys
import os

#file input output

#wb = write
#ab+ = read and append to file
#r+ = reading and writing

#create/open file
test_file = open("test.txt", "wb")

print(test_file.mode)#wb

print(test_file.name)#test.txt

test_file.write(bytes("Write me to the file\nI'm Filthy", "utf-8"))
#the \n does not make another line, only on reading in python

test_file.close()

#reading/writing

test_file = open("test.txt", "r+")

text_in_file = test_file.read()

print(text_in_file)

test_file.close()
os.remove("test.txt")
print("tet.txt deleted")
    
