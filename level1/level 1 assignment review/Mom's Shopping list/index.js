const form= document.addItem
const inputBox=document.getElementById("title")

form.addEventListener("submit", function (event) {

  event.preventDefault()
  console.log("test")
  const todoText= inputBox.value 
  addItemToList (todoText)
  form.title.value=""
})

function addItemToList (item){

    const list= document.getElementById ("list")
    const grocery= document.createElement ("li")
    const deletebutton= document.createElement ("button")
    const editButton= document.createElement ("button")
console.log(item)
    grocery.textContent= item 
    list.className="list";
    deletebutton.textContent= "Delete";
    deletebutton.id="delete-button";
    editButton.textContent="Edit";
    editButton.id="edit-button";
list.appendChild(grocery)
grocery.append(editButton)
grocery.append(deletebutton)
    deletebutton.addEventListener ("click", function (event){
    grocery.remove()
    })

    editButton.addEventListener ("click", function (event){
        event.preventDefault()
        removeItem()
    })

    function editItem (){

        constSaveBox=document.createElement ("input");
        savebox.id="save-box";

        const saveButton= document.createElement ("button")
        saveButton.textContent= "Save";
        saveButton.id= "save-button";

        if (!saveBox.ParentNode){
            document.getElementById("list").appendChild (saveBox);
        }

        if (!saveButton.parentNode){
            document.getElementById ("list").appendChild(saveButton);

            saveButton.addEventListener("click", function (event){
                event.preventDefault();

                grocery.textContent=saveBox.value;

                saveButton.remove();
                saveBox.remove();
                grocery.append(deleteButton)
                grocery.append(editButton)
            });

            function editItem(){

                const saveBox= document.createElement ("input");
                saveBox.id= "save-box";

                const saveButton= document.createElement ("button");
                saveButton.textContent= "save";
                saveButton.id= "save-button";

                const existingSaveBox= document.getElementById("save-box");
                const existingSaveButton= document.getElementById("save-button");

                if (!existingSavebox){
                    document.getElementById ("list").appendChild(saveBox);
                }

                if (!existingSaveButton){
                    document.getElementById("list").appendChild(saveButton);

                    saveButton.addEventListener("click", function(event){
                        event.preventDefault();

                        grocery.textContent=saveBox.value;

                        saveButton.remove();
                        saveBox.remove()
                        grocery.append(deleteButton);
                        grocery.append(editButton);

                    })
                }
            }
        }
    }
}

