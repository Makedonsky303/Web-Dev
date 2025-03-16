x = int(input())

while x > 1:
    if x % 2 == 0:
        x //= 2 
    else:
        print("NO")
        break
else:
    print("YES") 
