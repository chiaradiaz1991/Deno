// to run this file --> DENO_LAND =okay deno run --allow-env environment/index.js

console.log(Deno.env); 

const variable = Deno.env.get('DENO_LAND')

console.log(variable)