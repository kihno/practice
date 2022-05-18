const imageSlider = (() => {
    const slides = document.querySelectorAll('.image');
    const dotContainer = document.getElementById('dotContainer');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    for  (let i =0; i < slides.length; i++) {
        let div = document.createElement('div');
        div.classList.add('dot');
        div.setAttribute('data-index', i);
        dotContainer.appendChild(div);

        div.addEventListener('click', (e) => {
            let index = e.target.getAttribute('data-index');
            gotoSlide(++index);
        });
    }

    const dots = document.querySelectorAll('.dot');

    let slideIndex = 1;
    autoSlide(slideIndex);

    prev.addEventListener('click', () => {
        slide(-1);
    });
    next.addEventListener('click', () => {
        slide(1);
    });

    function slide(n) {
        showSlide(slideIndex += n);
    }

    function gotoSlide(n) {
        showSlide(slideIndex = n);
    }

    function showSlide(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
        });


        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].classList.add('active');
    }

    function autoSlide() {
        slideIndex++;
        showSlide(slideIndex);
        setTimeout(autoSlide, 3000);
    }

})();