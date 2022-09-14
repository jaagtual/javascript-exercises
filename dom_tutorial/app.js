const container = document.querySelector('#container');

const p = document.createElement('p');
p.innerText = `Hey I'm red`;
p.style['color'] = 'red';
container.appendChild(p)

const h3 = document.createElement('h3');
h3.innerText = `I'm a blue h3!`;
h3.style['color'] = 'blue';
container.appendChild(h3);

const div = document.createElement('div');
div.style['background-color'] = 'pink';
div.style['border'] = '2px solid black';

const h1Div = document.createElement('h1');
h1Div.innerText = `I'm in a div!`
div.appendChild(h1Div);

const pDiv = document.createElement('p');
pDiv.innerText = `ME TOO!`;
div.appendChild(pDiv);

container.appendChild(div);

container.appendChild(div);

// Event listeners
const btn = document.querySelector('#btn');
btn.addEventListener('click', e => {
    // e is the event
    e.target.style.background = 'blue';
    alert(e.target);
  });

// adding event listeners to a group of nodes 
const btnGroup = document.querySelectorAll('#button-container > button');
btnGroup.forEach(btn => {
    btn.addEventListener('click', () => alert(btn.innerHTML));
})