import math
import utils

def largest_prime_factor(number):
  max = int(math.floor(math.sqrt(number)))
  for n in xrange(max, 1, -1):
    if (number % n == 0 and utils.is_prime(n)):
      return n
    else:
      continue
  return number

print(largest_prime_factor(600851475143))
    
