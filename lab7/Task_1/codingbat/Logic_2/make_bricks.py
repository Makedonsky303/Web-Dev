def make_bricks(small, big, goal):
  big_num = goal//5 if goal//5 <= big else big
  
  goal -= big_num*5
  
  return goal<=small
