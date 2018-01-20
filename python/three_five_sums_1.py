def divisible_by_three_five(number):
  return (number % 3 == 0)  or (number % 5 == 0)

def sum_divisors(limit):
  total = 0
  for n in range(0,limit):
    if divisible_by_three_five(n):
      total = total + n
  return total

limit = input()
print(sum_divisors(limit))
