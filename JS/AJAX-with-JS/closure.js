function do_Task(task) {
  return function fun() {
    console.log(task);
  }
}

let mytask = do_task("Homework");
console.log(mytask());

/* 
homework
undefined
*/

function do_Task(task) {
  return function fun() {
    console.log(task);	// task -> do_task
  }
}

let mytask = do_task("Homework");
mytask();
