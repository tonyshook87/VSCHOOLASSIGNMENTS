// import { get } from "axios";
// import axios from "axios" 
// get ("<https://api.vschool.io/pokemon>")

// .then(response => {
//             for(let i = 0; i < response.data.length; i++){
//                  const h1 = document.createElement('h1')
//                  h1.textContent = response.data[i].title
//                  document.body.appendChild(h1)
//              }
//          })
//          .catch(error => console.log(error))
// function getData (){
//     axios.get ("https://api.vschool.io/pokemon")
//     .then(res => console.log(res.data.objects[0].pokemon))
//     .catch (err =>console.log(err))

// }
// getData()

 function getData (){
     axios.get ("https://api.vschool.io/pokemon")
     .then(res => {
         const pokemonList = res.data.objects[0].pokemon;
         pokemonList.map((pokemon) => {

            // create elements
             const h1 = document.createElement("h1")
            

            // asssign values
              h1.textContent = pokemon.name
              


            // put on the page
              document.body.appendChild(h1)
             
          })
      })
     .catch (err =>console.log(err))
    
 }
// function getData() {
//     axios.get("https://api.vschool.io/pokemon")
//         .then(res => {
//             const pokemonList = res.data.objects[0].pokemon;

//             pokemonList.map(pokemon => {
//                 const pokemonItem = document.createElement('h1');
//                 pokemonItem.className = 'if-you-wanted-a-className-and-css-file';
//                 pokemonItem.textContent = pokemon.name;
//                 document.body.appendChild(pokemonItem);
//             });
//         })
//         .catch(err => console.log(err));
// }

document.getElementById('button').addEventListener('click', getData);

//Sudo code:
//document.getElementbyId(" the button's id")  . addEventListener("click", getData )