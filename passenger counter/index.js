

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count
    console.log(count)
}

function save() {
    console.log(count)
}

let usernames = "John"

let message = "You have three notifications"

console.log(message + ", " + usernames + "!")

var messageToUser
messageToUser = message + ", " + usernames + "!"

console.log(messageToUser)


var name = "Caren"
var greeting = "Hi, my name is "


console.log(greeting + " " + name)

var myGreeting = greeting + " " + name
console.log(myGreeting)


