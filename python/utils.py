import math

def is_prime(number):
  max = int(math.floor(math.sqrt(number)))
  for n in xrange(2, max):
    if (number % n == 0):
      return False
    else:
      continue
  return True