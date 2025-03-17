def make_out_word(out, word):
  open_brackets = out[:2]
  closed_brackets = out[2:]
  
  return open_brackets + word + closed_brackets
