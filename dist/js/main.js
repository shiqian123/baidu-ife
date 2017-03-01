/**
 * Created by shiqian on 2017/3/1.
 */
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hi there and greetings!";
  return greet;
};
/**
 * Created by shiqian on 2017/3/1.
 */
function $(id) {
    return document.getElementById(id);
}

function add(num1, num2) {
    return num1 + num2;
}

function renderResult(result) {
    $("result").innerHTML = result;
}

function addEventHandle() {
    var num1 = $("number1").value;
    var num2 = $("number2").value;
    var result = add(num1, num2);
    renderResult(result);
}

function initEvent() {
    $("addbtn").addEventListener("click", addEventHandle, false);
}

initEvent();
/**
 * Created by shiqian on 2017/3/1.
 */
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return '[object Array]' === Object.prototype.toString.call(arr);
}

/**
 * 判断fn是否为一个函数，返回一个bool值
 *
 * @param  {any}  fn 目标对象
 * @return {boolean}        判断结果
 */
function isFunction(fn) {
  // chrome下,'function' == typeof /a/ 为true.
  return '[object Function]' === Object.prototype.toString.call(fn);
}
// 测试用例：
var obj = {
  a: 1,
  b: {
    b1: ["hello", "hi"],
    b2: "JavaScript"
  }
};

//深度克隆
function cloneObject(obj) {
  for(o in obj){
   console.log(o)
  }
}
cloneObject(obj)
