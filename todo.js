// var chai = require('chai')
//    expect = chai.expect;

var expect = require('chai').expect;

var taskList = [ ];

// I can list my tasks...
function listTasks(){
}

function addTaskToList(task, list){
  // What is the task? @param task
  // Where is the task going? @param list
  // What order / prioity? lowest, on the bottom
  return list.push(task)

}
expect(taskList.length).to.equal(0);
addTaskToList("Remember the milk", taskList);
expect(taskList[0]).to.equal("Remember the milk");
expect(taskList.length).to.equal(1);

//expect what??
expect(taskList[0]).to.equal("Remember the milk");
expect(taskList.length).to.equal(1);
addTaskToList("Take out the trash", taskList);
//expect what now??
expect(taskList[1]).to.equal("Take out the trash");
expect(taskList.length).to.equal(2);

console.log("Show both:", taskList[0], ",", taskList[1]);
