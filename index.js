
let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
let count = 0

function increment(){
    count += 1
    countEl.innerHTML = count
}

function save(){
    let entry = ` ${count} - `
    saveEl.innerHTML += entry
    console.log(count)
    countEl.innerHTML = 0
    count = 0
}
    

/*
let username = 'per'

let message = "You have three new notifications"

let messageToUser = `${message}, ${username}!`

console.log(`${message}, ${username}!`)

console.log(messageToUser)


let name = "Gogu"
let greeting = "Hi, my name is "
let myGreeting = greeting + name + "!"

console.log(myGreeting)
*/


