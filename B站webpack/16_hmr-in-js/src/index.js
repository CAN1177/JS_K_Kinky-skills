import './index.css';

// const myButton = document.createElement('button');
// myButton.innerText = '新增';
// document.body.appendChild(myButton);

// myButton.addEventListener('click', () => {
//   const myDiv = document.createElement('div');
//   myDiv.innerText = 'item';
//   document.body.appendChild(myDiv);
// })

import counter from './counter.js';
import number from './number.js';

counter();
number();

if (module.hot) {
  module.hot.accept('./number.js', () => {
    const numberDiv = document.getElementById('number');
    document.body.removeChild(numberDiv);
    number();
  })
}