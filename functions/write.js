
// to run this file --> deno run --allow-write functions/write.js 

const content = 'content';

// encrypt data to write
const encoder = new TextEncoder();


await Deno.writeFile('./data/write-data.txt', encoder.encode(content))