
import { serve } from 'https://deno.land/std@v0.61.0/http/server.ts';

const newServer = serve({ port : 8080 });

console.log('server running port 8080!')

// response request

for await (const request of newServer) {
  console.log(`${request.method} ${request.url}`);
  request.respond({ body: "Deno", status: 200})
}

// to run this file -> deno run --allow-net server/server.js