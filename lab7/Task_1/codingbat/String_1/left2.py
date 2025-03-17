def left2(str):
  if len(str)<=2:
    return str
    
  left_two = str[:2]
  rest = str[2:]
  
  return rest + left_two
