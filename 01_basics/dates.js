// let d = new Date()
// console.log(d.toDateString())
// console.log(d.toLocaleString())
// console.log(d.toLocaleDateString())
// console.log(d.toISOString())
// console.log(d.toTimeString())
// console.log(d.toUTCString())
// console.log(d.toJSON())
// console.log(typeof d)

// let mydate = new Date(2024,5,29)
// console.log(mydate.toDateString())

// let mydatenew = new Date("06-29-2024")
// console.log(mydatenew.toDateString())

let timestamp = Date.now()
console.log(Math.floor(timestamp/1000)); // in seconds

// do comparisons in milliseconds always (tick/cross)

// console.log(mydatenew.getTime())

let ndate = new Date()
// console.log(ndate.getDay())
// console.log(ndate.getMonth()+1)

console.log(ndate.toLocaleDateString('default', {
    weekday: "long"
}));

