function do_task(task) {	// global	// task is inside scope of do_task
  setTimeout(function execute()) {
             console.log(task,"done");	// task -> do_task
  }, 2000);	// given to js by environment ex: browser or node
}
console.log("Start");
do_task("Please complete homework");	// async support

/* 
Start
Please complete homework done
*/

function do_task(task) {	
  setTimeout(function execute()) {
             console.log(task,"done");	// task -> do_task
  }, 2000);	
}
console.log("Start");
do_task("Please complete homework");	
console.log("End");

/* 
Start
end
Please complete homework done
*/
// No synchronous behaviour here