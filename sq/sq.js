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
  Sq.state = [];
  Sq.prototype.allHref = function () {
    var allDiv = document.querySelectorAll('a');
    for(var i=0;i<allDiv.length;i++){
      allDiv[i].addEventListener('click',function () {
        location.hash = this.attributes.goHref.value;
        var div = '<div>'+'1212'+'</div>';
        Sq.state.push({hash:this.attributes.goHref.value,html:div});
        var node = document.createElement("div");
        var textNode = document.createTextNode('这是二级页面');
        node.appendChild(textNode);
        node.setAttribute('id','content')
        node.style.width = '100%';
        node.style.height = '100vh';
        node.style.position ='absolute';
        node.style.top = '0';
        node.style.background = '#ffffff';
        document.getElementById('root').appendChild(node);

      })
    }
  };
  //TODO 
  window.addEventListener("popstate", function(e) {
    console.log(e)
  });
  var a = new Sq();
  a.run()
})();