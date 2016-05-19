var goodbyeWorldModule = require( './goodbyeWorldModule' );

var helloWorldModule = function(){
  var outText = "...and this is from a module file" + goodbyeWorldModule();
  return( outText );
}
module.exports = helloWorldModule;
