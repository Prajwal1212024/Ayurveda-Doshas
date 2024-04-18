// Get all radio buttons and the remove class button
const radios = document.querySelectorAll('.input');
const removeClassButton = document.getElementById('actionbutton');
console.log("this cript wrks");
// Function to add class to unchecked radios
const def = [
    {"1":"one"},
    {"2":"two"},
    {"3":"three"}
]
let a = document.getElementById("one");
let b = document.getElementById("two");
let c = document.getElementById("three");
function addClassToUncheckedRadios() {
  radios.forEach(radio => {
    if (!radio.checked) {
        if(radio.id === '1'){
            a.classList.add('texty');
        }
        else if(radio.id === '2'){
            b.classList.add('texty');
        }
        else if(radio.id === '3'){c.classList.add('texty')}
    //   radio.classList.add('texty');
      console.log("Thid tpp");
    }
    if(radio.checked){
        if(radio.id === '1'){
            a.classList.remove('texty');
        }
        else if(radio.id === '2'){
            b.classList.remove('texty');
        }
        else if(radio.id==='3'){c.classList.remove('texty')}  
    }
  });
}

// Function to remove class from all radios
function removeClassFromAllRadios() {
    a.classList.remove('texty');
    b.classList.remove('texty');
    c.classList.remove('texty');
}

// Event listener for radio button click
radios.forEach(radio => {
  radio.addEventListener('click', addClassToUncheckedRadios);
});

// Event listener for button click
removeClassButton.addEventListener('click', removeClassFromAllRadios);
