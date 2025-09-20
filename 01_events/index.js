const fs=require('fs');


// read file 
const content = fs.readFileSync('notes.txt','utf-8');
console.log(content);