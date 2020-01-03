import math
import utils


def nthprime(n):
    last_prime = 2

    for i in xrange(1, n):
        last_prime = prime_after(last_prime)

    return last_prime


def prime_after(n):
    current = n + 1
    is_prime = utils.is_prime(current)
    while(not is_prime):
        current += 1
        is_prime = utils.is_prime(current)

    return current


print(nthprime(10001))
