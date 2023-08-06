console.log(document.cookie)
document.cookie="nam=nigamsharma"
document.cookie="name=parulsharma"
let key=prompt("enter your key")
let value=prompt("enter you value")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
