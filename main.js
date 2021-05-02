
//トップリンク//
let scrollAnimation = function(){
  const target = document.querySelector(".js-pagetop");
  if(window.pageYOffset >  2000) {
    target.classList.add("scroll-in");
  } else {
    target.classList.remove("scroll-in");
  }
};
window.addEventListener('scroll',scrollAnimation);


//メニューバー//
const btn =document.getElementById('menuButton');
const navArea =document.getElementById('navArea');


document.addEventListener('DOMContentLoaded',function() {
  btn.addEventListener("click",() => {
    btn.classList.toggle("open");
    navArea.classList.toggle("open");

  });
});

//コンタクトフォーム//
const inp = document.querySelectorAll("input,textarea");
for(let i=0; i<inp.length; i++) {
  inp[i].addEventListener("focus",function(){
    this.nextElementSibling.classList.add("active");
  });
  inp[i].addEventListener("blur",function(){
    this.nextElementSibling.classList.remove("active");
  });
};

//スクロールアニメーション//
const targetElement = document.querySelectorAll(".scAnimation");
document.addEventListener("scroll",() => {
  for (let i=0 ; i< targetElement.length; i++) {
    //ブラウザの上側から要素のトップまでの距離を取得
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight*.5;//半分くらい要素が見えたら発動
    if(window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    } 
  }
});
