
import {
  assertEquals, // values equals
  assertThrows
} from 'https://deno.land/std@v0.61.0/testing/asserts.ts';

const oneFunction = ()=> {
  throw new Error('error!');
}

Deno.test('assert equals', () =>{
  const x = 'hello';
  assertEquals(x, 'bye');
})

Deno.test('assert throws', ()=> {
  assertThrows(()=>{ oneFunction()});
});