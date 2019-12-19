const darkmodeBtn = document.querySelector('#darkmode');
const divs = document.querySelectorAll('#thumbnail');
const link =  document.querySelector('#link-thumbnail');
const body =  document.querySelector('#body');
const bodyArticle = document.querySelector('#bodyArticle');
const texts = document.querySelector('#textArticle p');

if (body) {
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
} else {
  darkmodeBtn.addEventListener('click', () => {
    if(bodyArticle.className !== 'toggle-isClicked'){
      bodyArticle.className = 'toggle-isClicked';
      texts.style.color = 'white'
    } else {
      bodyArticle.className = '';
      texts.style.color = 'black'
    }
  })
}