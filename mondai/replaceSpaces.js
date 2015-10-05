

function replaceSpaces(str) {

  var strs = str.split("");

  var i, rs="";
  for(i=0; i<strs.length; i++) {
    if(strs[i] == " ") {
      rs += "%20";
    } else {
      rs += strs[i];
    }
  }

  return rs;
}


var str = "a b cd e"
console.log(replaceSpaces(str));
