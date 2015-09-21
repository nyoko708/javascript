/**
 * 与えられた文字列の中で重複があるかどうかの判定
 */

var str = "あいうえおabcdefg";


/**
 * 与えた文字列の中に重複した文字がないか判定する関数
 *
 * @param {string} str
 * @return {boolean}
 */
function isUniqueString(str) {

  str = str.trim();
  var strs = str.split('');

  var i, uniqueFlags = [];
  for(i=0; i<str.length; i++) {
    var val = strs[i];
    if(val in uniqueFlags && uniqueFlags[val] == true) {
      return false;
    }
    uniqueFlags[val] = true;
  }

  return true;
}

console.log(isUniqueString(str));
