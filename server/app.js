var http = require('http');

http.createServer( function( req, res ) {
  console.log( "hello world from server on start" );
}).listen(3000);

console.log( 'server listening on port 3000' );
