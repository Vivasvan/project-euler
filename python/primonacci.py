import math
import nth_prime_7

def as_series():
  base = 10**14
  sequence = []
  for i in xrange(1, 100000):
    base = nth_prime_7.prime_after(base)
    print(base)
    sequence.append(base)
  return sequence

def fib_from_recurrence(n):
  phi = math.pow(0.5 * (1 + math.sqrt(5)), n)
  phirec = math.pow(0.5 * (1 - math.sqrt(5)), n)
  return math.sqrt(1/5) * (phi - phirec)

print(fib_from_recurrence(2))