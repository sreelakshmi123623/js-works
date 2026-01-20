function loginClick(){
    const username=document.getElementById("usern").value
    localStorage.setItem("usern",username)

    window.location="./homePage.html"
}