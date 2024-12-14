import {home,recipies,contact} from "./page-load.js"
import './style.css'

console.log("its Running");

function myFunction(element) {
    // Get the text field using the ID
    var copyText = document.getElementById(element);
  
    // Select the text field
    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges(); // Clear previous selections
    window.getSelection().addRange(range); // Select the text
  
    // Copy the text inside the selected range
    navigator.clipboard.writeText(copyText.innerText).then(function() {
        alert("Copied the text: " + copyText.innerText);
    });
}

const content = document.getElementById("content");
const menu = document.getElementById('menu');
const contactbtn = document.getElementById('contact');
const homeBtn = document.getElementById('home');
// object.addEventListener("load", home(content));
function Selected(){

    return{
        removeSelected(){
            homeBtn.classList.remove('selected');
            menu.classList.remove('selected');
            contactbtn.classList.remove('selected');
        },
        addSelected(element){
            element.classList.add("selected")
        },
    };

}
let selectedButtons = Selected();

home(content);
menu.addEventListener('click',()=>{
    recipies(content);
    selectedButtons.removeSelected();
    selectedButtons.addSelected(menu)
});
contactbtn.addEventListener('click',()=>{
    contact(content);
    selectedButtons.removeSelected();
    selectedButtons.addSelected(contactbtn)
});
homeBtn.addEventListener('click',()=>{
    home(content);
    selectedButtons.removeSelected();
    selectedButtons.addSelected(homeBtn);
});
// const header = document.getElementById('header');
// header.style = "background-color:red";

