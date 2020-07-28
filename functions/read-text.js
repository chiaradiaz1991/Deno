
// to run this read only command -->  deno run --allow-read functions/read-text.js
const res = await Deno.readTextFile('./data/data.txt');

console.log(res)


// another way

const resSync = Deno.readTextFileSync('./data/data.txt');

console.log(resSync)

