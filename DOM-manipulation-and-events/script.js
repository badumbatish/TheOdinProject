const para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey I'm red!"

document.body.appendChild(para);

const header3 = document.createElement('h3');
header3.style.color = 'blue';
header3.textContent = "I'm a blue h3!";

document.body.appendChild(header3);

const divS = document.createElement('div');
divS.style.borderColor = 'black';
divS.style.backgroundColor = 'pink';

const divHeader1 = document.createElement('h1');
divHeader1.textContent = "I'm in a div";

const divPara = document.createElement('p');
divPara.textContent = "ME TOO!";

divS.append(divHeader1, divPara);

document.body.appendChild(divS);