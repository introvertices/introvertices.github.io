//input boxes
let topLeftInput = document.getElementById("topLeft");
let topRightInput = document.getElementById("topRight");
let botLeftInput = document.getElementById("botLeft");
let botRightInput = document.getElementById("botRight");

// output labels
let labelTL = document.getElementById("labelTL");
let labelTR = document.getElementById("labelTR");
let labelBL = document.getElementById("labelBL");
let labelBR = document.getElementById("labelBR");

// listeners
let corners = {
    topLeft: '0',
    topRight: '0',
    botLeft:'0',
    botRight:'0'
}

// box to mod
let boxBorder = document.getElementById("box");

//code snippet output area
let snipOut = document.getElementById("snippet");

// Get inputs from site and modify the border radius
topLeftInput.addEventListener('input', function(){
    corners.topLeft = topLeftInput.value;
    labelTL.innerHTML = `${corners.topLeft}`;
    boxBorder.style.borderTopLeftRadius = corners.topLeft + "px";
    snippet();
});

topRightInput.addEventListener('input', function(){
    corners.topRight = topRightInput.value;
    labelTR.innerHTML = `${corners.topRight}`;
    boxBorder.style.borderTopRightRadius = corners.topRight + "px";
    snippet();
});

botLeftInput.addEventListener('input', function(){
    corners.botLeft = botLeftInput.value;
    labelBL.innerHTML = `${corners.botLeft}`;
    boxBorder.style.borderBottomLeftRadius = corners.botLeft + "px";
    snippet();
});

botRightInput.addEventListener('input', function(){
    corners.botRight = botRightInput.value;
    labelBR.innerHTML = `${corners.botRight}`;
    boxBorder.style.borderBottomRightRadius = corners.botRight + "px";
    snippet();
});

function snippet(){
    snipOut.innerHTML = `
    border-radius: ${corners.topLeft}px ${corners.topRight}px ${corners.botLeft}px ${corners.botRight}px;<br>
    border-top-left-radius: ${corners.topLeft}px;<br>
    border-top-right-radius: ${corners.topRight}px;<br>
    border-bottom-left-radius: ${corners.botLeft}px;<br>
    border-bottom-right-radius: ${corners.botRight}px;<br>
    
    `;
}

//I'm sure there's better ways but I'm a beginner and this is based on my current knowledge of JS. I will refactor later <3

