// to run this file -> deno run arguments/index.js 

console.log(Deno.args)

// parse arguments:

import { parse } from 'https://deno.land/std@v0.61.0/flags/mod.ts';

const parsed = parse(Deno.args); // Obj

console.log('Parsed', parsed);
console.log('a: ', parsed.a);

// deno run arguments/index.js -a 1