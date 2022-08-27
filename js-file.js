const container = document.querySelector('.container');

let blockInput = 8;
let blockNumber = Math.pow(blockInput, 2);

for (let i = 0; i < blockNumber; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    if (i >= blockNumber - 8) {
        block.style.cssText = 'border-bottom: 1px solid';
    }
    container.appendChild(block)
}