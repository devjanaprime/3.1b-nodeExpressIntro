var multipleExports = {
  multipleExportFunction:function(){
    return " ... and this is returned from a function within an object that is returned from a module";
  },
  genericMessage:" ...and this generic message is a variable in an object that is returned from a module"
};

module.exports=multipleExports;
