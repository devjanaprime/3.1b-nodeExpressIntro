var http = require('http');

http.createServer( function( req, res ){
  res.writeHead( 200 );
  res.write( "hello world from create server response" );
  res.end();
}).listen(3000);

console.log( 'server listening on port 3000' );
