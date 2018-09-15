import math
import utils

def nthprime(n):
  if (n == 1):
    return 2
  
  return primeAfter(nthprime(n-1))

def primeAfter(n):
  current = n + 1
  is_prime = utils.is_prime(n+1)
  while(not is_prime):
    current += 1
    is_prime = utils.is_prime(current)
  
  return current
  
print(nthprime(100))
