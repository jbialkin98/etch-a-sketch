const container = document.querySelector('.container');

let blockInput = 100;
let blockSize = Math.floor((800 / blockInput) * 100) / 100;
let blockNumber = Math.pow(blockInput, 2);
let blockSizeCSS = blockSize + 'px';
console.log(blockSize);
console.log(blockSizeCSS);

// set up grid
for (let i = 0; i < blockNumber; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.cssText = `width: ${blockSizeCSS}; height: ${blockSizeCSS}`;
    if ((i+1) % blockInput == 0) {
        block.style.borderRight= '1px solid';
    }
    if (i >= blockNumber - blockInput) {
        block.style.borderBottom = '1px solid';
    }
    container.appendChild(block)
}

const blocks = document.querySelectorAll('.block');
blocks.forEach(blocks => blocks.addEventListener('mouseover', function (e) {
    e.target.style.background = 'gray';
}));