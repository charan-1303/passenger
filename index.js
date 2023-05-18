 let c=document.getElementById("count-el")
 let s=document.getElementById("save")
 
 
    let count=0
function increment(){
   count = count +1
   c.innerText=count
}

function save(){
     let stringc= count + "  -  "
     s.textContent+= stringc  
     c.textContent = 0
     count = 0  
    
}
