const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
Hash = require("./Hash");
const Tasks = require("../hash/tasks");

class Task {
    raffle(deck) {
        let tasks = new Hash(Tasks);
        return tasks
        console.log(tasks)
    }

    choiceAnAction() {
        console.log(users.raffle())
        rl.question('delete', answer => {
            if (answer === 'a') {
                console.log(users.raffle());
            }
            else {
                let ans = Number(answer)
                Tasks.delete(ans);
                console.log(Tasks)
                rl.close();
            }});
    }
}
const users = new Task({

})
console.log(users.choiceAnAction())
module.exports = Task;