console.log("start");
setTImeout(function executed () {
  console.log("done");
},0);
console.log("end");

/*
start
end 
done
*/

console.log("start");
setTImeout(function executed () {
  console.log("done");
},0);
console.log("end");

for(let i=0;i<100000000;i++)
/*
start
end 
done
*/