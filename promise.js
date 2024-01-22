/*function ramusomu(){
    return new Promise(function(){
     setTimeout(function(){
        if(mattikitta raja)
    })
}
function miniAni(){
    console.log("odi poiru thambi vanthudatha")
}
ramusomu("hello ramu and somu",miniAni)*/

function tatakBook()
{
    return new Promise((resolve,reject) => {
        let bookingSuccess = false
        if (bookingSuccess)
            resolve()
        else
            reject()
    })
}

tatakBook().then(success)
.catch(failure)

function success(){
    console.log("Thanks for booking")
}
function failure(){
    console.log("Thanks for trying I will book a bus")
}
//promise object represents the eventual completion (or failure) of an asynchronus operation
