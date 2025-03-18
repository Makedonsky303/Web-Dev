def xyz_there(str):
  size = len(str)
  
  for i in range(size-2):
    if (i==0 or str[i-1]!=".") and str[i:i+3]=="xyz":
      return True
  return False
