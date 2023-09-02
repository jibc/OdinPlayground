let container = document.querySelector('.container');

let paraRed = document.createElement('p');

paraRed.textContent = "Hey i'm red!";
paraRed.style.color = "red";
container.appendChild(paraRed);

let heading3 = document.createElement('h3');
heading3.textContent = "I'm a blue h3";
heading3.style.color = "blue";
container.appendChild(heading3);

let div = document.createElement('div');
div.style.border = 'thick solid black';
div.style.backgroundColor = 'pink';

 
let heading1 = document.createElement('h1');
heading1.textContent = "I'm in a div";
div.appendChild(heading1);

let paraDiv = document.createElement('p');
paraDiv.textContent = 'ME TOO!';
div.appendChild(paraDiv);

container.appendChild(div);
