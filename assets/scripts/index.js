

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

// JSON =Javascript object notation 


let All_products=[
    {id:1,name:"iphone s  ",price:20000,image:"../images/iphone.png",brand:"mobile"},
    {id:2,name:"vivos",price:1000,image:"../images/vivo.png"},
    {id:3,name:"oppos",price:2000,image:"../images/samsung.png"},
    {id:4,name:"samsung",price:3000,image:"../images/samsung.png"},
    {id:4,name:"samsung",price:3000,image:"../images/samsung.png"},
]



function showData(){
    let data=""
    All_products.map((value,index)=>(
        data+=`
        <div class="col-lg-3">
            <div class="card">
                <img src="${value.image}" height="200px" alt="">
                <div class="card-body">
                    <span>${value.name}</span>
                    <h5>${value.price}</h5>
                </div>
            </div>
        </div>
        `
    ))

document.getElementById("showData").innerHTML=data

}
showData()


function searchFun(e){
e.preventDefault()
let searchData=document.getElementById("input").value
console.log(searchData);

// let output=All_products.filter((value,index)=> value.name.toLowerCase().trim() == searchData.toLowerCase().trim() || value.price == searchData || value.brand == searchData )
let output=All_products.filter((value,index)=> value.name.toLowerCase().trim().includes(searchData.toLowerCase().trim())  || value.price == searchData || value.brand == searchData )


console.log("output",output);

let data=""
output.map((v,i)=>(
    data+=`
      <div class="col-lg-3">
            <div class="card">
                <img src="${v.image}" height="200px" alt="">
                <div class="card-body">
                    <span>${v.name}</span>
                    <h5>${v.price}</h5>
                </div>
            </div>
        </div>
    `
))
document.getElementById("searchData").innerHTML=data
}



