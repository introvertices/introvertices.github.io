

function convert(){
    let wordToCheck = document.getElementById("userText");
    
    wordToCheck = wordToCheck.value.toLowerCase().replace(/[\W_]/g,''); //sanitise that bad boi
    
    palindromatic(wordToCheck);
}

function palindromatic(word){
    let reversed = [];
    let reversedWord ="";

    for (i = word.length-1; i > -1; i--){
        reversed.push(word[i]);
        reversedWord += reversed.pop();
        
    }
    
    let showRevText = document.getElementById('reversedWord');
    let result = document.getElementById('result');
    
    if(reversedWord == ""){
        showRevText.innerHTML = "You didn't enter anything (or you were trying to be an XSS badboy)"
        result.innerText = " ";
    }
    else if (word === reversedWord){
        showRevText.innerHTML = `<p class="centreText">Your original word was: ${word}. <br>Your reversed word is: ${reversedWord}.</br><br></p>`;
        result.innerText = "That's a palindrome!";
        console.log("Palindrome found!");
    }

    else{
        showRevText.innerHTML = `<p class="centreText">Your original word was: ${word}. <br>Your reversed word is: ${reversedWord}.</br><br></p>`;
        result.innerText = "That's not a palindrome!";
        console.log("Not a palindrome :(");
    }


}





