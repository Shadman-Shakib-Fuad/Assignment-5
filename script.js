let issues=[]

function login(){

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

if(user==="admin" && pass==="admin123"){

document.getElementById("loginPage").classList.add("hidden")
document.getElementById("mainPage").classList.remove("hidden")

loadIssues()

}else{
alert("Wrong Credentials")
}

}

async function loadIssues(){

document.getElementById("loader").classList.remove("hidden")

let res=await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")

let data=await res.json()

issues=data.data

displayIssues(issues)

document.getElementById("loader").classList.add("hidden")

}