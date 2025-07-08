let submitbutton=document.querySelector(".submit");
submitbutton.addEventListener("click",()=>{
    const input=document.querySelector(".add input");
    const taskText=input.value;
    if(taskText!=""){
        const ul=document.querySelector(".list-group");
        const li=document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        const span=document.createElement("span");
        span.textContent=taskText;

        const deletebtn=document.createElement("button");
        deletebtn.classList.add("btn", "btn-primary", "btn-sm", "delete");
        deletebtn.innerHTML='<i class="bi bi-trash-fill"></i>';


        deletebtn.addEventListener("click",()=>{
            li.remove();
        })



        li.appendChild(span);
        li.appendChild(deletebtn);
        ul.appendChild(li);
        input.value="";
    }
}); 
document.querySelectorAll('.delete').forEach(btn => {
    btn.addEventListener('click', function () {
        this.parentElement.remove();
    });
});