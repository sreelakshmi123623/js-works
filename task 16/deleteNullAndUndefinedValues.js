const data={a:10,b:5,c:null,d:undefined}

for(let key in data){
    if(data[key]==null){
        delete data[key]
    }
}

console.log(data);
