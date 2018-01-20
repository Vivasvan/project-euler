import math

def largest_prime_factor(number):
  max = int(math.floor(math.sqrt(number)))
  for n in xrange(max, 1, -1):
    if (number % n == 0 and is_prime(n)):
      return n
    else:
      continue
  return number

def is_prime(number):
  max = int(math.floor(math.sqrt(number)))
  for n in xrange(2, max):
    if (number % n == 0):
      return False
    else:
      continue
  return True

print(largest_prime_factor(600851475143))
    
