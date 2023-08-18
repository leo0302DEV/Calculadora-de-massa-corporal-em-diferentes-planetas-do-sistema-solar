export default function fleshCardAnimation() {
    var fleshCard = document.querySelector(".body__box");
    var hiddenFleshCard = document.querySelector('.body__resul-box');
    fleshCard.classList.add('body__box-animation');
    setTimeout(() => {
        hiddenFleshCard.classList.remove('resul-box__hidden');
    }, 1001);
}
