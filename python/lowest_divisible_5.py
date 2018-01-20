import math
import utils

def unique_prime_divisors_up_to(number):
  unique_divisors = set()
  for n in xrange(1, number):
    for m in xrange(1, n):
      if (n % m == 0 and utils.is_prime(m)):
        unique_divisors.add(m)
  return unique_divisors

def lowest_divisible_up_to(number):
  unique_divisors = unique_prime_divisors_up_to(number)
  print(unique_divisors)
  lowest_divisible = 1

  for n in unique_divisors:
    lowest_divisible = lowest_divisible * n
  
  return lowest_divisible

print(lowest_divisible_up_to(20))



