const darkmodeBtn = document.querySelector('#darkmode-container');
const darkmodeMoon =  document.querySelector('.darkmode-image-moon');
const darkmodeSun =  document.querySelector('.darkmode-image-sun');
const divs = document.querySelectorAll('#thumbnail');
const link =  document.querySelector('#link-thumbnail');
const body =  document.querySelector('#body');
const bodyArticle = document.querySelector('#bodyArticle');
const texts = document.querySelector('#textArticle p');
const logo = document.getElementById('logo');

// darkmodeBtn.className = 'darkmode-image-moon';

if (body) {
  darkmodeBtn.addEventListener('click', () => {

    if(body.className !== 'toggle-isClicked'){
      body.className = 'toggle-isClicked';
    divs.forEach(div => {
      div.className = 'toggle-isClicked'
    });
    link.style.color = 'white';
    // darkmodeMoon.style.display = 'block'
    // darkmodeSun.style.display = 'none'
    darkmodeMoon.classList.remove = 'disable'
    darkmodeSun.classList.add = 'disable'
    } else {
      body.className = '';
    divs.forEach(div => {
      div.className = ''
    });
    // link.style.color = 'black';
    darkmodeMoon.classList.add = 'disable'
    darkmodeSun.classList.remove = 'disable'
    // darkmodeSun.style.display = 'block'
    }
  })
} else {
  darkmodeBtn.addEventListener('click', () => {
    if (bodyArticle.className !== 'toggle-isClicked') {
      bodyArticle.className = 'toggle-isClicked';x
      texts.style.color = 'white'
      darkmodeBtn.className = 'darkmode-image-moon'
    } else {
      bodyArticle.className = '';
      texts.style.color = 'black'
      darkmodeBtn.className = 'darkmode-image-sun'
    }
  })
}

logo.addEventListener('click', function() {
  logo.classList.add('toggle-isClicked'); 
  console.log('ok' + logo.classList); 
})

darkmodeBtn.addEventListener('click', function() {
  if (logo.classList.contains('toggle-isClicked')) {
    logo.classList.remove('toggle-isClicked'); 
  }

  else {
    logo.classList.add('toggle-isClicked'); 
  }
})

