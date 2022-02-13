document.getElementById('btn-plass').addEventListener('click',function(){
        updateCase1(true)
        
})
// maines er jonno 
document.getElementById('btn-maines').addEventListener('click', function(){
      updateCase1(false)

})
// function use koreee 
function updateCase1(value){
        const caseInput = document.getElementById('input-fled')
        let caseNumber = caseInput.value
        if(value == true){
                caseNumber = parseInt(caseNumber) + 1;
        }
        else if(caseNumber > 0){
                caseNumber = parseInt(caseNumber) -1

        }
        caseInput.value = caseNumber;
        const tutalFled = document.getElementById('tutal-price')
        const tutalPrice = tutalFled.innerText;
        const price = parseInt(caseNumber) * 1219
        tutalFled.innerText = price
        calculation()


}

// phone section clos 


// function use koree 
function updateCase(value){
          let caseInput = document.getElementById('case-input');
          let caseNumber = caseInput.value
          if(value == true){
                    caseNumber = parseInt(caseNumber) + 1

          }
          else if(caseNumber > 0){
                    caseNumber = parseInt(caseNumber) - 1

          }
         const caseTutal = document.getElementById('case-tutal')
         caseTutal.innerText = caseNumber * 59

          
          caseInput.value = caseNumber
          calculation()

}

// coto phone 
document.getElementById('case-btn').addEventListener('click', function(){
        updateCase(true)
        
})
document.getElementById('case-mines').addEventListener('click', function(){
          updateCase(false)
          
  })

//   case section close 

function inputCalculation(){
        const phonePrice = document.getElementById('tutal-price').innerText
        const casePrice = document.getElementById('case-tutal').innerText 
        const tutalPrice = parseInt(phonePrice) + parseInt (casePrice)
        return tutalPrice
}

// calculation section 
function calculation(){
        // subtutal price update 
        const tutalPrice = inputCalculation()
        const subTutal = document.getElementById('sub-tutal')
        subTutal.innerText = ''
        subTutal.innerText = tutalPrice;

        //  tax price update 
        const taxfled = document.getElementById('tax')
        const tax = parseInt(tutalPrice) / 10
        taxfled.innerText = tax

        // final price 
        const finalFled = document.getElementById('final-price')
        const finalPrice = parseInt(tax) + parseInt(tutalPrice)
        finalFled.innerText = finalPrice

}  
