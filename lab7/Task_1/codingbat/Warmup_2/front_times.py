def front_times(str,n):
  front = ""
  if len(str) < 3:
    front = str
  else:
    front = str[:3]
  
  return front*n
    
