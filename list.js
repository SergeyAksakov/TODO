'use strict'

let list = ["task-1", "task-2", "task-3", "task-4"];//какие задачи есть 
class TODO {
removeTask(task) {
    list = list.filter((a) => {return a != task});//удаление 
}
addTask = (task) => {
    list.push(task);//добавление 
}
}
/*new TODO().removeTask(deletethis);
console.log(list);
new TODO().addTask(addtask);
console.log(list);*/

console.log("Tasks was here + /n", list);
const readline = require("readline-sync")();//подключение пакета
const task = readline("task");

new TODO().removeTask(task);
console.log(list);
