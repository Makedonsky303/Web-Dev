def string_match(a, b):
  cnt = 0
  min_len = min(len(a),len(b))
  
  for i in range(min_len-1):
    if a[i]==b[i] and a[i+1]==b[i+1]:
      cnt+=1
      
  return cnt
