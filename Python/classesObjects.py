import random
import sys
import os

#None or simple quotes("")
#__ means private, need of get/set

class Animal:
    
    __name = None
    __height = 0
    __weight = 0
    __sound = 0

    #constructor
    def __init__(self, name, height, weight, sound):
        self.__name = name
        self.__height = height
        self.__weight = weight
        self.__sound = sound   

    #getters and setters
    def get_name(self):
        return self.__name
    
    def set_name(self, name):
        self.__name = name

    def get_height(self):
        return self.__height

    def set_height(self, height):
        self.__height = height

    def get_weight(self):
        return self._weight

    def set_weight(self, weight):
        self.__weight = weight

    def get_sound(self):
        return self.__sound

    def set_sound(self, sound):
        self.__sound = sound

    def get_type(self):
        print("Animal")

    def toString(self):
        return "{} is {} cm tall and {} kilograms and say {}.".format(self.__name,
                                                                      self.__height,
                                                                      self.__weight,
                                                                      self.__sound)



#if you create a constructor, it will be the only constructor
#there is no function overloading
#to use empty constructor, just don't create one
'''
cat = Animal()
cat.set_name("Pimpy")
print(cat.get_name())
'''

cat = Animal("Whiskers", 33, 55, 2)
print(cat.toString())



class Dog(Animal):

    __owner = ""

    def __init__(self, name, height, weight, sound, owner):
        self.__owner = owner
        super(Dog, self).__init__(name, height, weight, sound)

    def get_owner(self):
        return self.__owner

    def set_owner(self, owner):
        self.__owner = owner

    def get_type(self):
        print("Dog")

    #override super class function, adding owner
    def toString(self):
        return "{} is {} cm tall and {} kilograms and say {}. His owner is {}".format(self.__name,
                                                                                      self.__height,
                                                                                      self.__weight,
                                                                                      self.__sound,
                                                                                      self.__owner)
    #well, there is no function overloading,
    #but you can just like in javascript and handle if the parameters were passed
    def multiple_sounds(self, how_many = None):
        if how_many is None:
            print(self.__sound)
        else:
            print(self.__sound * how_many)



spot = Dog("Spot", 123, 321, "woof", "Jack")
#print(spot.toString())
#spot.multiple_sounds()
#spot.multiple_sounds(5)

class Testing:
    __name = None
    __age = 0

    #almost like function overloading
    def __init__(self, name = None, age = 0):
        if not((name == None) and (age == 0)):
            self.__name = name
            self.__age = age

    def get_name(self):
        return self.__name
    def set_name(self, name):
        self.__name = name

    def get_age(self):
        return self.__age
    def set_age(self, age):
        self.__age = age

    def toString(self):
        return "I am {} and I am {} years old".format(self.__name, self.__age)

    def get_type(self):
        return "Testing"
    

test = Testing()
test.set_age(14)
test.set_name("Josh")
print(test.get_name(), test.get_age())


class AnimalTesting:
    def get_type(self, animal):
        animal.get_type()

animalTesting = AnimalTesting()
animalTesting.get_type(cat)#Animal
animalTesting.get_type(spot)#Dog
