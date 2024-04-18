   // Define your array of values
   const targetElement = document.getElementById("targett");
   const ques_change = document.getElementById("question-pallete");
   const future_change = document.getElementById("future-pallete");
   const Op1 = document.getElementById("one");
   const Op2 = document.getElementById("two");
   const Op3 = document.getElementById("three");
   const Fu1 = document.getElementById("ek");
   const Fu2 = document.getElementById("do");
   const Fu3 = document.getElementById("teen");
   const chang1 = document.getElementById("changerr1");
   const chang2 = document.getElementById("changerr2");
   const backer = document.getElementById("backer");
   const lineBreak = "<br>";
   const div1 = document.getElementById("br_ke1");
   const div2 = document.getElementById("br_ke2");


   const MyQuestion = [             //12
    {
        Question: "What is your body type ? ",
        Option1: "Too Tall / Too Short",
        Option2: "Medium",
        Option3: "Short",
        Quote: "Soon you will know your Prakriti. Cheers!"
    },
    {
        Question: "What is your body-weight type ? ",
        Option1: "Lean",
        Option2: "Average",
        Option3: "Heavy",
        Quote: "Soon you will know your Prakriti. Cheers!"
    },
    {
        Question: "What is your Skin-type ? ",
        Option1: "Rough, easily skin gets dark",
        Option2: "Smooth, Achne/Pimple",
        Option3: "Bright, Smooth, Attractive",
        Quote: "Soon you will know your Prakriti. Cheers!"
    },
    {
        Question: "What type of eye you have ? ",
        Option1: "Sunken, small eyelashes",
        Option2: "Sharp, penetrating eyes ",
        Option3: "Big, thick eyelashes",
        Quote: "Soon you will know your Prakriti. Cheers!"
    },
    {
        Question: "What type of hair you have ? ",
        Option1: "Dry, Small, Curly",
        Option2: "Thin, Silky, Oily",
        Option3: "Thick, soft, dark, wavy",
        Quote: "Soon you will know your Prakriti. Cheers!"
    },
    {
        Question: "What type of forehead you have ? ",
        Option1: "Small, Irregular",
        Option2: "Medium",
        Option3: "Large, Attractive",
        Quote: "Soon you will know your Prakriti. Cheers!"
    },
    {
        Question: "How is your digestion going on? ",
        Option1: "Irregular",
        Option2: "Very Well",
        Option3: "Weak",
        Quote: "Soon you will know your Prakriti. Cheers!"
    },
    {
        Question: "How often you get thirty ? ",
        Option1: "Sometimes",
        Option2: "Very Often",
        Option3: "Very Rarely",
        Quote: "Soon you will know your Prakriti. Cheers!"
    },
    {
        Question: "What is your preferred food taste?",
        Option1: "Sweet, Sour, Salty",
        Option2: "Sweet, bitter, slightly bitter",
        Option3: "Bitter, Slight bitter, Strong Taste",
        Quote: "Soon you will know your Prakriti. Cheers!"
    },
    {
        Question: "How much is your control on hunger? ",
        Option1: "Irregular",
        Option2: "Poor",
        Option3: "Very Good",
        Quote: "Soon you will know your prakriti!!"
    },
    {
        Question: "How much is your food consumption? ",
        Option1: "Irregular",
        Option2: "Heavy",
        Option3: "Normal",
        Quote: "Soon you will know your prakriti!!"
    }
    // {
    //     Question: "What are your bowel movements ? ",
    //     Option1: "Irregular, Diarrhea, Constipation",
    //     Option2: "Diarrhea",
    //     Option3: "Constipation"
    // }
   ];









   var currentIndex = 1; // Initialize the index to 0
   const selectedValues = []; // Array to store selected radio button values
   console.log("Script is working");
   // Function to display the next value in the array


function solve(selectedValue){
    var Vata=0;
    var Pitta=0;
    var Kapha=0;
    for(let i=0;i<12;i++){
        if(selectedValue[i] === '1'){
            Vata++;
        }
        else if(selectedValue[i] === '2'){
            Pitta++;
        } 
        else{
            Kapha++;
        }
    }

    // Exception

        if(selectedValue[7] === '1' ){
            Kapha+=0.5;
        }
        if(selectedValue[7] === '3' ){
            Vata+=0.5;
        }
        if(selectedValue[10] === '2' ){
            Kapha+=0.5;
        }
        if(selectedValue[10] === '2' ){
            Vata+=0.5;
        }
        if(selectedValue[10] === '1'){
            Pitta+=0.5;
        }
        if(selectedValue[11] === '2'){
            Vata+=0.5;
        }
        if(selectedValue[11] === '3'){
            Vata+=0.5;
        }

        let vata = (Vata/((Vata+Pitta+Kapha)))*100;
        let pitta = (Pitta/((Vata+Pitta+Kapha)))*100;
        let kapha = (Kapha/((Vata+Pitta+Kapha)))*100;
        const obj = {
            VATA: vata,
            PITTA: pitta,
            KAPHA: kapha
        }
        return obj;
}






   function displayNextValue() {
    const selectedRadioButton = document.querySelector('input[name="radio"]:checked');
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    if (selectedRadioButton) {
        selectedValues.push(selectedRadioButton.id);
        console.log("Selected Radio Button: " + selectedRadioButton.id);
        console.log(selectedValues);
        selectedRadioButton.checked = false;
    
       if (currentIndex < MyQuestion.length) {

        //    console.log("Displaying: " + nextValue);


        //    future_change.innerHTML = MyQuestion[currentIndex].Question;
        //    Fu1.innerHTML = MyQuestion[currentIndex].Option1;
        //    Fu2.innerHTML = MyQuestion[currentIndex].Option2;
        //    Fu3.innerHTML = MyQuestion[currentIndex].Option3;
        targetElement.classList.add("flipp");

        // chang2.innerHTML = MyQuestion[currentIndex+1].Quote;

           setTimeout(() => {
            ques_change.innerHTML = MyQuestion[currentIndex].Question;
            Op1.innerHTML = MyQuestion[currentIndex].Option1;
            Op2.innerHTML = MyQuestion[currentIndex].Option2;
            Op3.innerHTML = MyQuestion[currentIndex].Option3;
            // if(MyQuestion[currentIndex].Quote){
            chang1.innerHTML = MyQuestion[currentIndex].Quote;
            // if(currentIndex === 1){
            //     let bun = document.getElementsByClassName("button");
            //     console.log("yayyyy" + bun);
            //     bun.innerHTML = "Submit";   
            // }
            // if(currentIndex === 10)
            // {
            //     change.innerHTML("Soon you will know your prakriti!!")
            // }
            currentIndex++;
            targetElement.classList.remove("flipp");
            }, 1000);
            future_change.innerHTML = MyQuestion[currentIndex].Question;
            Fu1.innerHTML = MyQuestion[currentIndex].Option1;
            Fu2.innerHTML = MyQuestion[currentIndex].Option2;
            Fu3.innerHTML = MyQuestion[currentIndex].Option3;
            chang2.innerHTML = MyQuestion[currentIndex].Quote;
            // count();
           // Store the selected radio button value           
      } else {
           console.log("End of array reached.");
           let soul = solve(selectedValues);
        //    console.log(soul);
        let radion = document.querySelectorAll('input[type="radio"]');
        targetElement.classList.add("flipp");
        let highest = Math.max(soul.VATA,soul.PITTA,soul.KAPHA);
        let highname;
        if(highest === soul.VATA){
            highname='VATA';
        }else if(highest === soul.PITTA){
            highname='PITTA';
        }
        else
        highname='KALPA';

        soul.VATA=soul.VATA.toFixed(2)
        soul.PITTA=soul.PITTA.toFixed(2)
        soul.KAPHA=soul.KAPHA.toFixed(2)


        setTimeout(() => {
            
         ques_change.innerHTML = "Congrats, you are "+highname;
         Op1.innerHTML = "Vata :"+soul.VATA+"%";
         Op2.innerHTML = "Pitta :"+soul.PITTA+"%";
         Op3.innerHTML = "Kalpa :"+soul.KAPHA+"%";
         chang1.innerHTML = "Thanks for using this Questionaire, --By Harsh";
        //  backer.classList.add("gayab");
        div1.insertAdjacentHTML("afterend", lineBreak);
         radion.forEach(function(radio) {
            radio.style.display = 'none';
        });

        //  currentIndex++;
         targetElement.classList.remove("flipp");
         }, 1000);
         future_change.innerHTML = "Congrats, you are "+highname;
         Fu1.innerHTML = "Vata : "+soul.VATA+"%";
         Fu2.innerHTML = "Pitta : "+soul.KAPHA+"%";
         Fu3.innerHTML = "Kalpa : "+soul.KAPHA+"%";
         backer.style.top = '-516px';
        //  backer.style.maxHeight = "415px";
         div2.insertAdjacentHTML("afterend", lineBreak);
         chang2.innerHTML = "Thanks for using this Questionaire, --By Harsh";

         radion.forEach(function(radio) {
            radio.style.display = 'none';
        });
        let butt = document.getElementById("actionButton");
        Op1.htmlFor="";
        Op2.htmlFor="";
        Op3.htmlFor="";
        butt.innerHTML="";

        //    console.log(selectedValues);
       }
    }
    else{
    console.log("Element is added");
    // butt.classList.add('shaking');
    // butt.addEventListener('', () => {
    // butt.classList.remove('shaking');
    //   });  
    console.log("Check the check element");
    }
   }

   // Attach click event to the button
   document.getElementById("actionButton").addEventListener("click", displayNextValue);