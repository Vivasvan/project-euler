import math

def is_palindrome(number):
  num_string = str(number)
  return num_string == num_string[::-1]

def biggest_trip_product_palindrome():
  largest = 0
  workings = []
  for i in xrange(100, 999):
    for j in xrange(100, 999):
      product = i * j
      if (is_palindrome(product)):
        largest = max(largest, product)
        workings = [i, j] if (largest == product) else workings
      
  print(largest)
  print(' times '.join([str(workings[0]), str(workings[1])]))

biggest_trip_product_palindrome()