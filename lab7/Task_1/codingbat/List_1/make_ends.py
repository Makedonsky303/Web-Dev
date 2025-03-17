def make_ends(nums):
  if len(nums) == 1:
    return [nums[0]]*2
  else:
    return [nums[0], nums[len(nums)-1] ]
