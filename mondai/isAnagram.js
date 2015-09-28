/**
 * アナグラム判定
 */

/**
 * Anagramクラス
 *
 * @param [string] str1
 * @param [string] str2
 */
Anagram = function(str1, str2) {
  this.str1 = str1;
  this.str2 = str2;
}

/**
 * アナグラムかどうか判定
 *
 * @return [bool]
 */
Anagram.prototype.isAnagram = function() {

  strs1 = this._sort(this.str1);
  strs2 = this._sort(this.str2);

  if(strs1.toString() != strs2.toString()) {
    return false;
  }

  return true;
}

/**
 * 文字列を配列にしてソート
 * @param [string] str
 * @return [array]
 */
Anagram.prototype._sort = function(str) {
  return str.trim().replace(" ", "").split("").sort();
}


var str1 = "anagrams";
var str2 = "ars magna";
var anagram = new Anagram(str1, str2);
console.log(anagram.isAnagram());
