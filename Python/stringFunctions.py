import random
import sys
import os

long_string = "I'll catch you if you fall"

#first four characters(0 to 3 index)
print(long_string[0:4])

#last 5 characters
print(long_string[-5:])

#till the last 5 characters
print(long_string[:-5])

print(long_string[:4] + " be there")

print("%c is my %s letter and my number %d number is %.5f" %
      ("X", "favorite", 1, .14))

my_name = "otávio"
print(my_name.capitalize())#first letter

print(my_name.find("á"))#returns 2
print(long_string.find("catch"))#returns 5

#returns true if there is only alphabetic characters(cannot have space)
print(long_string.isalpha())#false
str = "textnospaceonlycharacters"
print(str.isalpha())#true

str3 = 123456
str4 = "ttr1234"
str5 = "adf 3444"
print(str4.isalnum())#returns true if a string is all alphanumeric

print(str5.replace("adf", "genius"))
print(str5.strip())#removes white spaces

str10 = "hey i am a string that will become a list"
cool_list = str10.split(" ")
print(cool_list)


