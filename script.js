

function refreshDat(){
    let list = document.querySelector(".list");
    data.sort((p1,p2)=>Number(p2.score)-Number(p1.score))
    
  list.innerHTML=""
  for (let i = 0; i < data.length; i++) {
    let currentPlayer=data[i];


    let dataRow = document.createElement("li");
    let fullName = document.createElement("span");
    // let sName=document.createElement("span")
    let countryData = document.createElement("span");
    let scoreData = document.createElement("span");
    let incBtn = document.createElement("button");
    let decBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    let buttonContainer=document.createElement("div")


    buttonContainer.classList.add("button_container")
    incBtn.classList.add("btn")
    decBtn.classList.add("btn")
    deleteBtn.classList.add("btn")


    

    fullName.innerText = currentPlayer.name;
    countryData.innerText = currentPlayer.country;
    scoreData.innerText = currentPlayer.score;
    incBtn.innerText="+5"
    decBtn.innerText="-5"
    deleteBtn.innerHTML=`<i class="fa-solid fa-trash"></i`
    


        

    buttonContainer.append(incBtn,deleteBtn,decBtn)
    dataRow.append(fullName, countryData, scoreData, buttonContainer);
    list.append(dataRow);

    


    incBtn.setAttribute("onclick",`increase(${i})`)
    decBtn.setAttribute("onclick",`decrese(${i})`)
    deleteBtn.setAttribute("onclick",`deleteEle(${i})`)
    // console.log(fullName ,countryData,scoreData)

    // console.log(list);
}
}



function increase(index){
    data[index].score+=5
    refreshDat()
}

function decrese(index){
    data[index].score-=5
    refreshDat()
}
function deleteEle(index){
    data.splice(index,1)
    refreshDat()
}

let data = [];

function addPlayer() {
  let firstName = document.querySelector(".first-name").value;
  let secondName = document.querySelector(".second-name").value;
  let country = document.querySelector(".country").value;
  let score = document.querySelector(".score").value;
  let list = document.querySelector(".list");

  let palayerData = {
    name: firstName + " " + secondName,
    country: country,
    score: Number(score),
  };



  data.push(palayerData);

  document.querySelector(".first-name").value=""
  document.querySelector(".second-name").value=""
  document.querySelector(".country").value=""
  document.querySelector(".score").value=""


  data.sort((p1,p2)=>Number(p2.score)-Number(p1.score))


  list.innerHTML=""
  for (let i = 0; i < data.length; i++) {
    let currentPlayer=data[i];


    let dataRow = document.createElement("li");
    let fullName = document.createElement("span");
    // let sName=document.createElement("span")
    let countryData = document.createElement("span");
    let scoreData = document.createElement("span");
    let buttonContainer=document.createElement("div")
    let incBtn = document.createElement("button");
    let decBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    buttonContainer.classList.add("button_container")
    incBtn.classList.add("btn")
    decBtn.classList.add("btn")
    deleteBtn.classList.add("btn")


    

    fullName.innerText = currentPlayer.name;
    countryData.innerText = currentPlayer.country;
    scoreData.innerText = currentPlayer.score;
    incBtn.innerText="+5"
    decBtn.innerText="-5"
    deleteBtn.innerHTML=`<i class="fa-solid fa-trash"></i`
    


        
    buttonContainer.append(incBtn,deleteBtn,decBtn)
    dataRow.append(fullName, countryData, scoreData, buttonContainer);
    list.append(dataRow);


    incBtn.setAttribute("onclick",`increase(${i})`)
    decBtn.setAttribute("onclick",`decrese(${i})`)
    deleteBtn.setAttribute("onclick",`deleteEle(${i})`)
    // console.log(fullName ,countryData,scoreData)

    // console.log(list);
  }
}

let btn = document.querySelector(".add-player");
btn.addEventListener("click", addPlayer);