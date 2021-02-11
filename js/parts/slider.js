function slider() {
    //slider

    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.getElementsByClassName('dot');
        sliderList = document.querySelector('.wrap'),
        slideWidth = 300,
        pos = 0;

    
    showSlides(slideIndex);

    function showSlides(n) {
        
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        };

        for ( let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        };

        // dots.forEach(elem => {
        //     elem.classList.remove('dot-active');
        // })
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('dot-active');
            // i - ідентифікатор
        };

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
       /// dots[slideIndex + 1].classList.remove('dot-active');

    }
     
    function plusSlides (n) {
        showSlides(slideIndex += n)
    }

    function currentSlide(n) {
        showSlides(slideIndex = n)
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
        // slides.style.left = -(slideWidth * pos) + 'px';
        // slides.style.transition = 'left 0.6s ease-in-out';
    });

    prev.onclick = scrollToPrev;
    function scrollToPrev() {
        pos--;
      
        if (pos < 0) {
          var children = sliderList.children;
      
          sliderList.style.transition = null;
          sliderList.style.left = -(pos + 2) * slideWidth + 'px';
          sliderList.insertBefore(children[slides.length - 1], children[0]);
          pos++;
         }
        requestAnimationFrame(function(){ //ожидаем следующего запланированного reflow/repain;
          requestAnimationFrame(function(){ 
            //предыдущий reflow рассчитал новый dom элемент
            //можно делать анимацию.
            sliderList.style.transition = 'left 0.6s linear';
            sliderList.style.left = -(slideWidth * pos) + 'px';
          })
        });
      }

    next.addEventListener('click', function(){
        plusSlides(1);
    });
   
  


    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
}
module.exports = slider;