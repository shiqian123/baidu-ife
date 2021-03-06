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
var srcObj = {
  a: 1,
  b: {
    b1: ["hello", "hi"],
    b2: "JavaScript"
  }
};

//深度克隆
function cloneObject(obj) {
  var _newObj = new Object();
  for(o in obj){
    _newObj[o] = obj[o];
  }
  return _newObj;
}
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
  var _temp = [arr[0]];
  for(var i = 0;i<arr.length;i++){
    if(_temp.indexOf(arr[i])<0){
      _temp.push(arr[i])
    }
  }
 return _temp
}

function trim(str) {
  return  str.replace(/\s*/g,'');
}

var str = '   hi!  ';
str = trim(str);
// console.log(str.length); // 'hi!'




// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
  for (var i = 0;i<arr.length;i++){
    fn(arr[i],i)
  }
}
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
  console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html




// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
  return Object.keys(obj).length
}

// 使用示例
var obj = {
  a: 1,
  b: 2,
  c: {
    c1: 3,
    c2: 4
  }
};
function a() {
  var b =10;
  return function bar(x) {
    if(x>b){
      console.log(x);
    }
  };
}
var a = a();
b = 100;
a(15)
// 判断是否为邮箱地址
function isEmail(emailStr) {
  var test =  /^\w{3,20}@(\w{2,8})(.([a-zA-z]{2,8})){1,4}$/g;
  console.log( test.test(emailStr))
   return test.test(emailStr)
}
isEmail('shiqian@qq.com');

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
  var _className = document.getElementById(element).className;
   if(element.className ==''){
     document.getElementById(element).setAttribute('class',newClassName)
   }else{
     var classArr =_className;
      if(classArr.indexOf(newClassName)>-1){
        return
      }else{
        _className = (_className + ' ' + newClassName)
        console.log( _className )
      }
   }
}
//封装
function getId(id){
  return document.getElementById(id);
}
// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
  console.log(document.querySelector('#addbtn'));
  if(getId(element).parentNode == getId(siblingNode).parentNode){
    console.log(1111)
  }else{
    console.log(333)
  }
}
function getPosition(element) {
  var box = element.getBoundingClientRect();
  return box;
}
// mini selector
function $(selector) {
  return document.querySelector(selector);
}
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {

 listener(1)
}
function callBack(a) {
}
addEvent('addbtn','click',callBack);
addClass('addbtn','a');
isSiblingNode('addbtn','sss')