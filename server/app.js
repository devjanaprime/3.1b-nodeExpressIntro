var http = require('http');
var helloWorldModule = require( '../modules/helloWorldModule');

http.createServer( function( req, res ){
  res.writeHead( 200 );
  res.write( "hello world from create server response" );
  res.write( functionResponse() );
  res.write( helloWorldModule() );
  res.end();
}).listen(3000);

var functionResponse = function(){
  return( " ...and this is some text from a function!");
}

console.log( 'server listening on port 3000' );
