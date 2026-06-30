

function loginFun(e){
    e.preventDefault()
    let username=document.getElementById("user").value
    let password=document.getElementById("pass").value
    console.log(username,password);
    if(username == "Ilife" && password == 123){
        window.location.href="./assets/pages/home.html"
    }
    else{
        alert("username or password is invalid")
    }
}

// function fun2(){
//     document.getElementById("head").style.color="red"
//     document.getElementById("head").style.backgroundColor="yellow"
//     document.getElementById("head").innerText="division "
//     document.getElementById("head").innerText="<h1>division</h1>"
// }
