function loginClick(){
    const usrname=document.getElementById('usern').value
    console.log(usrname);
    //add username to local storage
    localStorage.setItem('usern',usrname)
    //redirect to home page
    window.location='./welcomepage.html'
    
    
}