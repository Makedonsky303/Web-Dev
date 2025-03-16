from math import isqrt

a = int(input())
b = int(input())

for i in range(a, b + 1):
    if isqrt(i) ** 2 == i:  
        print(i, end=" ")
