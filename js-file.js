const container = document.querySelector('.container');

let blockInput = 16;
let blockNumber = Math.pow(blockInput, 2);
let blockSize = 800 / blockInput;
let blockSizeCSS = blockSize + 'px';
console.log(blockSizeCSS);

for (let i = 0; i < blockNumber; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.cssText = `width: ${blockSizeCSS}; height: ${blockSizeCSS}`;
    if (i >= blockNumber - blockInput) {
        block.style.borderBottom = '1px solid';
    }
    container.appendChild(block)
}
