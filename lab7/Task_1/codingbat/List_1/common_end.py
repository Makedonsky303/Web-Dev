def common_end(a, b):
  first = a[0] == b[0]
  last = a[len(a)-1] == b[len(b)-1]
  
  return first or last
