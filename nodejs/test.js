function init() {
  var name = "Mozilla";

  function displayName() {
    console.log(name);
  }
  displayName();
}


function test() {
  var x = 1;

  return function() {
    x = x + 1;
  }
}

var hoge = test();
hoge();
hoge();
hoge();

function test() {

}
