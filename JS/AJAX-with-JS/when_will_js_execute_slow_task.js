function print() {
  console.log("hello");
}

function blockforsometime() {
  for(let i=0;i<100000000;i++) {}
}

setTImeout(print,0);
blockforsometime();
console.log("end");
blockforsometime();

/* 
end
hello
*/