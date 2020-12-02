const input1 = [apple, apply, ape, at];
//HORIZONTAL METHOD
// apple =>  appl =>  ap =>  a
// apply     ape      at
//VERTICAL METHOD => same speed/time complexity BEST best case scenario
// apple
// apply
// ape
// at =>
// a

const longestCommonPrefix = (strs) => {
  // prefix = ""
  let prefix = "";
  if (strs.length === 0) return prefix;
  // Loop through characters (char, index)
  //   Loop through strings (str)
  //     if str[index] !== char
  //       return prefix
  //   prefix = prefix + char
  // return prefix
  for (let i = 0; i < strs[0].length; i++) {
    const character = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== character) return prefix;
    }
    prefix = prefix + character;
  }
  return prefix;
};
