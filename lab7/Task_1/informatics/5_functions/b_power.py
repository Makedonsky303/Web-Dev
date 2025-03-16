def power(x, n):
    result = 1
    for _ in range(n):
        result *= x
    return result

x, n = map(float, input().split())

print( power(x, int(n)) ) 