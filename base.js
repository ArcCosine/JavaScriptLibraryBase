(function(global){

  //define
  var _BROWSER = !!global.self;
  //var _NODE_JS = !!global.process;

  //interface
  function ClassName(){
  }
  ClassName.prototype.method = ClassMethod;

  //implements
  function ClassMethod() {
  }

  //export
  global.ClassName = ClassName;

})(this.self || global);  //this.self as window object.
