def array_front9(nums):
  size = len(nums)
  upper = 4 if size > 4 else size
  
  for i in range(upper):
    if nums[i] == 9:
      return True
  
  return False
