/**
 * Created by shiqian on 2017/3/6.
 */
(function () {
   function Sq() {

   }
  Sq.prototype.run = function () {
    var allDiv = document.querySelectorAll('div')
    for(var i=0;i<allDiv.length;i++){
      if(allDiv[i].attributes.start){
        console.log(allDiv[i].attributes.start.value)
      }
    }
    this.allHref();
  };
  Sq.prototype.allHref = function () {
    var allDiv = document.querySelectorAll('a');
    for(var i=0;i<allDiv.length;i++){
      allDiv[i].addEventListener('click',function () {
        location.hash = this.attributes.goHref.value
        console.log(this.attributes.goHref.value)
      })
    }
  };
   var a = new Sq();
  a.run()
})();