
// to run this file ---> deno run --allow-read functions/read.js 
// Deno.readFile -> dynamic data
const res = await Deno.readFile('./data/data.txt');

console.log(res)

// if we have to read strings

const textDecoder = new TextDecoder()

console.log(textDecoder.decode(res))
