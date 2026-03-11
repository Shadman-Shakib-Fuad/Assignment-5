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

function displayIssues(data){

let container=document.getElementById("issueContainer")

container.innerHTML=""

document.getElementById("issueNumber").innerText=data.length+" Issues Found"

data.forEach(issue=>{

let card=document.createElement("div")

card.className="issue-card"

if(issue.status==="closed"){
card.classList.add("closed")
}

card.innerHTML=`

<h3>${issue.title}</h3>

<p>${issue.description}</p>

<div>

<span class="label">bug</span>
<span class="label">help wanted</span>

<span class="priority">${issue.priority}</span>

</div>

<p>Author: ${issue.author}</p>

<p>${issue.createdAt}</p>

`

card.onclick=()=>openModal(issue)

container.appendChild(card)

})

}

function filterIssues(type,event){

let tabs=document.querySelectorAll(".tab")

tabs.forEach(t=>t.classList.remove("active"))

event.target.classList.add("active")

if(type==="all"){

displayIssues(issues)

}else{

let filtered=issues.filter(i=>i.status===type)

displayIssues(filtered)

}

}

async function searchIssue(){

let text=document.getElementById("searchInput").value

let res=await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`)

let data=await res.json()

displayIssues(data.data)

}