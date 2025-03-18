def sum67(nums):
  sum = 0
  
  is_six = False
  
  for i in nums:
    if i==6:
      is_six = True
    elif i==7 and is_six:
      is_six = False
      continue
      
    if is_six:
      continue
    
    sum+=i
    
  return sum
    
    
