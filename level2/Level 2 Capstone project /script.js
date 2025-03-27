const form = document.form;








const getTodos=()=>{
  axios.get("https://api.vschool.io/anthonyshook/todo")
  .then((res) => createTodo(res.data))
  .catch (err =>console.log(err)
  )
}

function clearListData() {
  const list = document.getElementById("list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

form.addEventListener("submit",(e)=> {
  e.preventDefault();
  const newTodos= {
    title: form.title.value,
    description: form.description.value,
    price: form.price.value,
    imgUrl: form.imgUrl.value,
  } 
  axios.post("https://api.vschool.io/anthonyshook/todo",newTodos)
  .then((res) =>getTodos())
  .catch(error => console.log(error) )
})


function createTodo(data) {
  clearListData();

  const list = document.getElementById("list");
  for (let i = 0; i < data.length; i++) {
    const iD = data[i]._id;

    const div = document.createElement("div");

    list.appendChild(div);
    const h1 = document.createElement("h1");
    h1.textContent = data[i].title;
    h1.className = "todo-item-title";
    div.appendChild(h1);
    div.className = "todo-item";

    const p = document.createElement("p");
    p.textContent = data[i].description;
    div.appendChild(p);
    p.className = "todo-item-details";

    const p2 = document.createElement("p");
    p2.textContent = data[i].price;
    div.appendChild(p2);
    p2.className = "todo-item-details";

    const img = document.createElement("img");
    img.src = data[i].imgUrl;
    div.appendChild(img);
    img.className = "todo-item-img";

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "button-div";
    div.appendChild(buttonDiv);

    const button = document.createElement("button");
    button.textContent = "Delete";
    buttonDiv.appendChild(button);
    button.className = "todo-item-buttons";
    button.addEventListener("click",function(event){
      axios.delete (`https://api.vschool.io/anthonyshook/todo/${iD}`)
      .then(res =>{
location.reload()
console.log(res.data)
      } )
.catch(err => console.log(err))    })

    const button2 = document.createElement("button");
    button2.textContent = "Edit";
    buttonDiv.appendChild(button2);
    button2.className = "todo-item-buttons";

    const label = document.createElement("label");
    label.textContent = "Completed";
    div.appendChild(label);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    div.appendChild(checkbox);
    checkbox.className = "checkbox";
    //console.log(checkbox.checked)
checkbox.addEventListener("change", function(){
  if(checkbox.checked === true){
    h1.style.textDecoration = "line-through";
  } else{
    h1.style.textDecoration = "none";
  }
})

    

    if (data[i].completed === true) {
      h1.style.textDecoration = "line-through";
      p.style.textDecoration = "line-through";
      p2.style.textDecoration = "line-through";
      h1.style.textDecorationColor = "black";
      p.style.textDecorationColor = "black";
      p2.style.textDecorationColor = "black";
      checkbox.checked = true;
    }

 

    button2.addEventListener("click", () => {
      h1.remove(this);
      p.remove(this);
      p2.remove(this);
      img.remove(this);

      const imgEdit = document.createElement("input");
      imgEdit.value = img.src;
      div.prepend(imgEdit);
      imgEdit.setAttribute("class", "editInput");
     

      const descriptionEdit = document.createElement("input");
      descriptionEdit.value = p.textContent;
      div.prepend(descriptionEdit);
      descriptionEdit.setAttribute("class", "editInput");
    

      const priceEdit = document.createElement("input");
      priceEdit.value = p2.textContent;
      div.prepend(priceEdit);
      priceEdit.setAttribute("type", "number");
      

      const titleEdit = document.createElement("input");
      titleEdit.value = h1.textContent;
      div.prepend(titleEdit);
      titleEdit.setAttribute("class", "editInput");
     

      button2.remove(this);
      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      div.appendChild(saveBtn);

      saveBtn.addEventListener("click", function () {
        const updatedInfo = {
          title: titleEdit.value,
          description: descriptionEdit.value,
          price: priceEdit.value,
          imgUrl: imgEdit.value,
        };

        console.log(updatedInfo);

        axios.put(`https://api.vschool.io/anthonyshook/todo/${iD}`, updatedInfo)
          .then(res => getTodos())
          .catch(err => console.log(err))
       

        priceEdit.remove(this);
        imgEdit.remove(this);
        descriptionEdit.remove(this);
        titleEdit.remove(this);
         
        saveBtn.remove(this);
        div.appendChild(button2)
      });
    });
  }
}

;






getTodos()