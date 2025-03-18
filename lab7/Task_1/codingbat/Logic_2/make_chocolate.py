def make_chocolate(small, big, goal):
  big_num = goal//5 if big>=goal//5 else big
  
  goal -= big_num * 5
  
  return (goal if goal<=small else -1)
