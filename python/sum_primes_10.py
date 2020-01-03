import math


def sum_primes():
    prime_list = primes_upto(2000000)
    sum_primes = sum_list(prime_list)
    print(sum_primes)


def primes_upto(n):
    primes = set()
    total = 0
    for i in xrange(2, n):
        if (relatively_prime_to_list(i, primes)):
            primes.add(i)
            total = total + i
            print(i)
    return primes


def relatively_prime_to_list(n, numberList):
    for l in numberList:
        if (n % l == 0):
            return False
    return True


def sum_list(numberList):
    total = 0
    for i in numberList:
        total += i

    return total


sum_primes()
