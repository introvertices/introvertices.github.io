function convert(){

    // get the element that the binary number is in
    const binaryNum = document.getElementById('binaryNum');


    // math for conversion, pulling the text from the above element
    const printDec = parseInt(binaryNum.value,2);

    // Get element where the result should be displayed
    const resultText = document.getElementById('decResult');
    
    if (Number.isNaN(printDec)){
        //display result
        resultText.textContent = "That's not a valid input!"
        
    }
    else{
        resultText.textContent = printDec;
    }



}

