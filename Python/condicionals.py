import random
import sys
import os

age = 122

if (age >= 21) :
    print("You are old enough to drink")
elif age >= 16 :
    print("You are old enough to drive")
else :
    print("You are a baby, lel")

#and, or, not()

if (age >= 1 and age < 18):
    print("You are a kid/teenager")
elif ((age >= 18) and (age <= 65)):
    print("You are a adult");


if not(age == 30):
    print("You are not 30 years old")
