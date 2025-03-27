function changeTextContent(elementId, newText) {
const element= document.getElementById(elementId)
element.textContent=newText
}
   const changeButton = document.getElementById('changeButton')
   // Test the function with different element IDs and new text content
   changeButton.addEventListener('click', function(){
      // console.log('test')
   changeTextContent('heading', 'Welcome to my website!');
   changeTextContent('paragraph', 'This is a sample paragraph.');
   })
