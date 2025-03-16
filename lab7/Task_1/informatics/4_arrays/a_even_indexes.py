# n = int(input())
# lst = [int(input()) for _ in range(n)]  

# print(*lst[::2], sep=" ") 


n = int(input())  
lst = list(map(int, input().split())) 

print(*lst[::2]) 

