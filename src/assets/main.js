const darkmodeBtn = document.querySelector('#darkmode');
const divs = document.querySelectorAll('#thumbnail')
const link =  document.querySelector('#link-thumbnail');



console.log(divs)
const body =  document.querySelector('#body');
darkmodeBtn.addEventListener('click', () => {
  if(body.className !== 'toggle-isClicked'){
    body.className = 'toggle-isClicked';
  divs.forEach(div => {
    div.className = 'toggle-isClicked'
  });
  link.style.color = 'white';
  } else {
    body.className = '';
  divs.forEach(div => {
    div.className = ''
  });
  link.style.color = 'black';
  }

})
console.log(darkmodeBtn)