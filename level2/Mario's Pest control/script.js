
// targeting the form 
const form = document.form;


// function to call 
function calculateTotal(event){

   // prevent default refresh
   event.preventDefault()

   // grabbing the value input fields to dynmaically set in the form
   const goombas= parseInt(form.goombas.value)||0;

   const bobombs= parseInt(form.bobombs.value) ||0;
   
   const cheepcheeps= parseInt(form.cheepcheeps.value) ||0;
   
   
   
   // multiplying the input number from the input field
   const goombasCoinsNumber = goombas*5
   const bobombsCoinsNumber = bobombs*7
   const cheepcheepsCoinsNumber = cheepcheeps*11


   // grabbing the input value from the total caught section to dynamical calculate
//    listgoombas.value = goombasCoinsNumber
//   listbobombs.value = bobombsCoinsNumber;
//    document.getElementById("listcheepcheeps").value = cheepcheepsCoinsNumber;


   // taking those individual totals and adding them together
   const total= goombasCoinsNumber + bobombsCoinsNumber + cheepcheepsCoinsNumber
   // grabbing the id of the div to render the total 
   document.getElementById("totalCoins").textContent= total


   // grabbing the id of the inputs for rendering the total in the html elment
   document.getElementById("listgoombas").textContent= goombasCoinsNumber
   document.getElementById("listbobombs").textContent= bobombsCoinsNumber
   document.getElementById("listcheepcheeps").textContent= cheepcheepsCoinsNumber
}  


// using a event listener to listen for the submit and run the function on submit 
form.addEventListener("submit", calculateTotal)