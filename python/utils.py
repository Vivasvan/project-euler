import math


def is_prime(number):
    is_prime = True
    n = 2
    while (n <= math.sqrt(number)):
        if (number % n == 0):
            is_prime = False
        n += 1
    return is_prime
