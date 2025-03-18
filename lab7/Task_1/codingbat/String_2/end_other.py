def end_other(a, b):
  short = ""
  long = ""
  a_l = len(a)
  b_l = len(b)
  min_l = 0
  
  if a_l >= b_l:
    short = b.lower()
    min_l = b_l
    long = a.lower()
    
  else:
    short = a.lower()
    min_l = a_l
    long = b.lower()
    
  return long[-min_l:] == short
    
