let tail1=document.getElementById("tail");
let tail2=document.getElementById("tail2");

tail1.addEventListener("click",()=>{
    
        tail1.style.opacity=0;
        tail2.style.opacity=1;
})

tail2.addEventListener("click",()=>{
   
        tail1.style.opacity=1;
        tail2.style.opacity=0;
})