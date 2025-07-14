let button = document.getElementById('hamburger');
let header = document.getElementById('header');

button.addEventListener('click', function(){
  header.classList.toggle('open');
});

let main = document.getElementById('mainvisual');
window.addEventListener('scroll', function(){
  header.classList.add('clear');
  let mainHeight = main.clientHeight;
  let headerHeight = header.clientHeight;
  let scroll = window.scrollY;

  if(scroll > mainHeight - headerHeight){
    header.classList.remove('clear');
  }else{
    header.classList.add('clear');
  }
});

new Splide('#slider1',{
  type: 'loop',
  perPage: 3,
  gap: '40px',
  padding: { left: '28px', right: '28px' },
  width: '1096px',
  pagination: false,
  
  breakpoints: {
    768: {
      perPage: 1,
      padding: { left: 0 , right: 0 }
    }
  }
}).mount();





