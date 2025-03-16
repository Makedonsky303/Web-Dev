x = input()
decimal = 0

for i in range(len(x)):  
    decimal += int(x[i]) * (2 ** (len(x) - 1 - i))  

print(decimal)
