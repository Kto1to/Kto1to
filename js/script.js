//----------------------Первый слайдер-----------------------
let dots = document.getElementsByClassName('dots-item'),
    dotsarea = document.getElementsByClassName('dots-block')[0],
    slides = document.getElementsByClassName('slides-item'),
    prevbtn = document.getElementById('left-button'),
    nextbtn = document.getElementById('right-button'),
    slideindex = 1;


showSlides(slideindex);


function showSlides (n) {
    if (n < 1) {
        slideindex = slides.length;
    } else if (n > slides.length) {
        slideindex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active1');
    }
    slides[slideindex - 1].style.display = 'block';
    dots[slideindex - 1].classList.add('active1');
    }

    function plusSlides(n) {
        showSlides(slideindex += n)
    }

    function currentslide(n) {
        showSlides(slideindex = n);
    }
    prevbtn.onclick = function () {
        plusSlides(-1);
    }
    nextbtn.onclick = function () {
        plusSlides(1);
    }

    dotsarea.onclick = function (e) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('dots-item') && e.target == dots[i - 1]) {
                currentslide(i);
            }
        }
    }