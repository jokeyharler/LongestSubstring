function SubString(str, i, j) {
  let temp = [];
  for (let t = i; t <= j; t++) {
    if (!temp.includes(str[t])) temp.push(str[t]);
  }
  let sum = j - i + 1;
  if (temp.length === sum) {
    return temp.length;
  } else return 1;
}

function LongestSubString(str) {
  if (str.length < 0) return 0;
  if (str.length === 1) return 1;
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++) {
      let temp = SubString(str, i, j);
      if (num < temp) {
        num = temp;
      }
    }
  }
  return num;
}

LongestSubString("abcabcbb");
LongestSubString("bbbbb");
LongestSubString("pwwkew");
