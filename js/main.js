'use strict';

const logo = document.querySelectorAll('.logo, .grid-wr div');
const nav = document.querySelector('nav');
const gnb = document.querySelectorAll('.gnb li');
const section = document.querySelectorAll('.effect');
const imgMo = document.querySelectorAll(".works-mo .img-list li");
const imgPc = document.querySelectorAll(".works-pc .img-list li");
const pjDes = document.querySelectorAll(".des-list > li");
const works = document.querySelectorAll('.works-list li a');
const typing = document.querySelector('.typing');

/* init */
window.setTimeout(() => {
  for(let i=0; i<logo.length; i++) {
    logo[i].classList.add('on');
  }
  nav.classList.add('on');
  section[0].classList.add('on');
  gnb[0].firstChild.classList.add('active');

  setTimeout(() => {
    typingFunc(getString());
    setInterval(blink, 500);
  }, 500);
}, 2500);

logo[3].addEventListener('click', () => {
  location.href = "https://bora-lim.github.io/portfolio/";
})

/* scroll시 해당 section 및 gnb 활성화 */
window.addEventListener('scroll', () => {
  let scroll = window.scrollY;

  section.forEach((item, index) => {
    const top = item.getBoundingClientRect().top + scroll;
    const bt = top + item.getBoundingClientRect().height;

    if(scroll >= top - 100 && scroll < bt) {
      item.classList.add('on');
      gnb[index].firstChild.classList.add('active');

      if(index === 1) {
        imgMo[0].classList.add('active');
        imgPc[0].classList.add('active');
      }else {
        imgMo[0].classList.remove('active');
        imgPc[0].classList.remove('active');
      }
    }else {
      item.classList.remove('on');
      gnb[index].firstChild.classList.remove('active');
    }
  })
})
/* main-sec02 img 활성화 */
works.forEach((item, index) => {
  const allEl = [imgMo[index], imgPc[index], pjDes[index]];
  item.addEventListener('mouseover', () => {
    allEl.forEach((el) => {
      el.classList.add('active');
    })
  })
  item.addEventListener('mouseout', () => {
    allEl.forEach((el) => {
      el.classList.remove('active');
    })
  })
})


/* main-sec01 typing effect */
const keyStrength = ["끊임없이 노력하는", "책임감이 강한", "협업을 중시하는",
"'같이의 가치'를 아는", "배움을 두려워하지 않는", "구글링을 좋아하는"];
let idx = 0;
function getString() {
  if(idx >= keyStrength.length)
    idx =0;

  const string = keyStrength[idx];
  const splitString = string.split("");
  idx++;

  return splitString;
}

function typingFunc(arr) {
  if(arr.length > 0) {
    setTimeout(() => {
      const str = arr.shift();
      typing.textContent += str; 
      typingFunc(arr);
    }, 100);
  }else {
    setTimeout(() => {
      typing.textContent = "";
      typingFunc(getString());
    }, 2500);
    
  }
}

function blink() {
    typing.classList.toggle("active");   
}







