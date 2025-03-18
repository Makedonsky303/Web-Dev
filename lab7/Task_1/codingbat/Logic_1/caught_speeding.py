def caught_speeding(speed, is_birthday):
  additional = 5 if is_birthday else 0
  
  if speed<=60+additional:
    return 0
  elif 61+additional<=speed<=80+additional:
    return 1
  elif speed>=81+additional:
    return 2