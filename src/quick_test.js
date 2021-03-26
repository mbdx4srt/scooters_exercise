const {user,station,scooter} = require('./scooters.js')

station.stations = []
const nhg =  new station('Notting Hill Gate')
const es = new scooter ('Electric')
const ms = new scooter ('Manual')
//nhg.park(es)
console.log(es.charged)

//nhg.park(es).then(
  //  ()=>{console.log(es.charged)}
//)


parker()


// This was the snipper to use with the then pattern

///async function parker() {
   /// await nhg.park(es)
   /// console.log(es.charged)
///}


// This is concurrent
// async function parker() {
//     let a = nhg.park(es)
//     let b = nhg.park(ms)
//     await Promise.all([a, b])
//     console.log(es.charged)
//     console.log(ms.charged)
// }


// This is consecutive
 async function parker() {
    let a = await nhg.park(es)
    let b = await nhg.park(ms)
    console.log(es.charged)}

