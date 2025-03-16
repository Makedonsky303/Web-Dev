def sign(num):
    if num > 0:
        return 1
    elif num < 0:
        return -1
    else:
        return 0

n = int(input())  
lst = list(map(int, input().split())) 

same_sign = False


for i in range(1, len(lst)):
    if sign(lst[i]) == sign(lst[i-1]):
        same_sign = True
        break

if same_sign:
    print("YES")
else:
    print("NO")