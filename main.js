
//トップリンク//
let scrollAnimation = function(){
  const target = document.querySelector(".js-pagetop");
  if(window.pageYOffset >  900) {
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
