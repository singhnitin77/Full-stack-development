for(var i=0;i<10;i++) {
  setTimeout(function execute() {
    console.log("i is ",i);
  },i*1000);
}

/*
i is 10
i is 10
i is 10
i is 10
i is 10
i is 10
i is 10
i is 10
i is 10
*/

for(let i=0;i<10;i++) {
  setTimeout(function execute() {
    console.log("i is ",i);
  },i*1000);
}

/*
i is 1
i is 2
i is 3
i is 4
i is 5
i is 6
i is 7
i is 8
i is 9
*/