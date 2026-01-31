//pro is the object of promise class

var pro= new Promise((resolve,reject)=>{//Promise((resolve,reject) is predefined//successCase-resolve,rejectCase-reject.
    let lotnum=1
    let prizenum=Math.floor(Math.random()*10)
    if(lotnum==prizenum){
        resolve("You won the lottery")
    }
    else{
        reject("Better luck next time")
    }
})

pro.then(msg=>console.log(msg))//result value from resolve()
.catch(err=>console.log(err))//result value from reject()