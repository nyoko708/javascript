/**
 * 与えられた文字列を逆にする関数
 */

/**
 * 文字列を逆にする
 * @param [stinrg] str
 * @return [string]
 */
function reverseString(str) {
  var i, strs="";
  for(i=(str.length-1); i>=0; i--) {
    strs += str.substr(i, 1);
  }
  return strs;
}

var str = "あいう　　えお abcdefg";
console.log(reverseString(str))
