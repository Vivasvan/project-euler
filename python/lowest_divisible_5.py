import math
import utils

def primes_up_to(number):
  primes = set()
  for n in xrange(2, number):
    if (utils.is_prime(n)):
      primes.add(n)
  return primes

def multiplicity(num, upto):
  for i in range(2, upto):
    if (math.pow(num, i) > upto):
      return i-1
    else:
      continue
  return 1

def lowest_divisible_up_to(number):
  primes = primes_up_to(number)
  print(primes)
  lowest_divisible = 1

  for n in primes:
    multi = multiplicity(n, number)
    multiplication_factor = n ** multi
    lowest_divisible = lowest_divisible * multiplication_factor
  
  return lowest_divisible

print(lowest_divisible_up_to(20))



