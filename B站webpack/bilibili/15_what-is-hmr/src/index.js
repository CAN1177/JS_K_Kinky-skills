import './index.css';

const myButton = document.createElement('button');
myButton.innerText = '新增';
document.body.appendChild(myButton);

myButton.addEventListener('click', () => {
  const myDiv = document.createElement('div');
  myDiv.innerText = 'item';
  document.body.appendChild(myDiv);
})