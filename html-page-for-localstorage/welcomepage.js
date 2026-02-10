//to get the data from local storage -getItem(key:string)
let  username=localStorage.getItem('usern')
console.log(username);
head1.innerHTML=`WELCOME ${username}`


//to remove the data from local storage - removeItem()

function logout(){
    // localStorage.clear()
    window.location='./login.html'
}