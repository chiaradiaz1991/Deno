
import {
  readFileStr,
  readFileStrSync
} from 'https://deno.land/std@v0.61.0/fs/read_file_str.ts';

const text = await readFileStr('./data/data.txt', { encoding: 'utf8'});

console.log(text)