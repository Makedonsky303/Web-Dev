def round10(num):
  if 0<=num%10<=4:
    return num - (num%10)
  else:
    return num - (num%10) + 10


def round_sum(a, b, c):
  return round10(a) + round10(b) + round10(c)
  
