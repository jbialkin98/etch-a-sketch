const container = document.querySelector('.container');

let blockInput = 64;
gridSetup(blockInput);

function gridSetup(blockInput) {
    let blockNumber = Math.pow(blockInput, 2);
    let blockSize = Math.floor((600 / blockInput) * 100) / 100;
    let blockSizeCSS = blockSize + 'px';

    for (let i = 0; i < blockNumber; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.cssText = `width: ${blockSizeCSS}; height: ${blockSizeCSS}`;

        // Add right border to last block of each row
        if ((i+1) % blockInput == 0) {
            block.style.borderRight= '1px solid';
        }
        // Add bottom border to each block in the bottom row
        if (i >= blockNumber - blockInput) {
            block.style.borderBottom = '1px solid';
        }
        container.appendChild(block)
    }
    sketching();
}

function sketching() {
    let originalHSL = 90;

    const blocks = document.querySelectorAll('.block');
    blocks.forEach(blocks => blocks.addEventListener('mouseover', function (e) {
        e.target.style.background = 'black';
    }));
}

let gridWidth = document.querySelector('#gridSize');
const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', () => submitClicked());

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => clearClicked());

function deleteGrid() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(blocks => blocks.remove());
}

function submitClicked() {
    let userText = document.getElementById('gridSize').value;
    blockInput = parseFloat(userText);
    if (blockInput >= 8 && blockInput <= 100 && Number.isInteger(blockInput)) {
        deleteGrid();
        gridSetup(blockInput);
    } else {
        alert("Please enter a valid number between 8 and 100");
    }
}

function clearClicked() {
    deleteGrid();
    gridSetup(blockInput);
}

