let reachA = new Promise((resolve,reject) => {
    const reached = true
    if(reached)
        setTimeout(resolve,3000,"Sharmi reached")
    else    
        reject("Sharmi not reached")

}
)

let reachB = new Promise((resolve,reject) => {
    const reached = true
    if(reached)
        setTimeout(resolve,2000,"Sangeetha reached")
    else    
        reject("Sangeetha not reached")

}
)
let reachC = new Promise((resolve,reject) => {
    const reached = false
    if(reached)
        setTimeout(resolve,1000,"Sindhu reached")
    else    
        reject("Sindhu not reached")

}
)
/*Promise.all([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))*/


//promise - pending,resolved,rejected(settled)

/*Promise.allSettled([reachA,reachB,reachC]) //fulfills whwn all promises settle
.then((message)=>console.log(message))
.catch((message)=>console.log(message))*/

Promise.any([reachA,reachB,reachC]) //fulfills when any of the promises fulfills rejects when all promises reject
.then((message)=>console.log(message))
.catch((message)=>console.log(message))