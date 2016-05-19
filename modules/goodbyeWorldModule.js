var goodbyeWorldModule = function(){
  outText = " ...and this is from a module that is called within a module";
  return outText;
}
module.exports = goodbyeWorldModule;
