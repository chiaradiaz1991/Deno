
// to run this file -> deno run --allow-read permissions/read.js 

const res = await Deno.readFile('./data/data.txt');

console.log(res)