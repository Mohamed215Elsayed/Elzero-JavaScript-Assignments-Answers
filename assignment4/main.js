console.group("Group 1");
console.log("Message one");
console.log("Message two");
console.group("Child Group");
console.log("Message one");
console.log("Message two");
console.group("Grand Child Group");
console.log("Message one");
console.log("Message two");
console.groupEnd("Grand Child Group");
console.groupEnd("Child Group");
console.groupEnd("Group 1");
console.group("Group 2");
console.log("Message one");
console.log("Message two");
console.groupEnd("Group 2");