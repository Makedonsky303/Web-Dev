n = int(input())
lst = list(map(int, input().split()))
size = len(lst)


for i in range(size//2):
    temp = lst[i]
    lst[i] = lst[size-i-1]
    lst[size-i-1] = temp

for i in lst:
    print(i,end=" ")

