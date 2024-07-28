const inputbox=document.querySelector("#input-box")
const listContainer=document.querySelector("#list-container")

function addTask(){
   if(inputbox.value===''){
    alert("You must write something!")
   }
   else{
    let li=document.createElement("li")
    li.innerHTML= inputbox.value;
    listContainer.appendChild(li);
    let span=document.createElement("span")
    span.innerHTML='\u00d7'
    li.appendChild(span);
   }
   inputbox.value='';
   storage();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        storage();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        storage();
    }
},false);

const storage=()=>{
    localStorage.setItem("data", listContainer.innerHTML);
}
const showdata=()=>{
    listContainer.innerHTML=localStorage.getItem("data")
}
showdata();