
// to run this file -> deno run --allow-net web/fetch.js

const res= await fetch('https://jsonplaceholder.typicode.com/posts/1');
const data = await res.json();

console.log(data);

// sometimes when TOP level await is not supported we can do something like this:

// (async ()=> {
//   const res= await fetch('https://jsonplaceholder.typicode.com/posts/1');
// const data = await res.json();

// console.log(data);
// })();