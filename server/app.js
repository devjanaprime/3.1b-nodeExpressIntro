var http = require('http');

http.createServer( function( req, res )
  res.writeHead( 200 );
  res.write( "hello world from response" );
  res.end();
}).listen(3000);

console.log( 'server listening on port 3000' );
