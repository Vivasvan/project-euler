def fibonacci(n):
  if n < 3:
    return 1
  else:
    return fibonacci(n-2) + fibonacci(n-1)

total = 0
currentFib = 1
index = 1
while (currentFib < 4e7):
  currentFib = fibonacci(index)
  if (currentFib % 2 == 0):
    total = total + currentFib
  index = index + 1
  
print(total)