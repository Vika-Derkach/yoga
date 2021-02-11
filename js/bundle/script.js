//виповняється тоді коли html є , сама структура
window.addEventListener('DOMContentLoaded', function(){
  

    
    let calcul = require('../parts/calcul.js');
    let contacts = require('../parts/contacts.js');
    let form = require('../parts/form.js');
    let modal = require('../parts/modal.js');
    let scroll = require('../parts/scroll.js');
    let slider = require('../parts/slider.js');
    let timer = require('../parts/timer.js');
    let tabs = require('../parts/tabs.js');

    calcul();
    tabs()
    contacts();
    form();
    modal();
    scroll();
    slider();
    timer();
    // let tab = document.getElementsByClassName('info-header-tab'),
    //     tabContent = document.getElementsByClassName('info-tabcontent'),
    //     info = document.getElementsByClassName('info-header')[0];

    // const hideTabContent = (a) => {
    //     for (let i = a; i < tabContent.length; i++ ) {
    //         tabContent[i].classList.remove('show');
    //         tabContent[i].classList.add('hide');
    //     }
    //     // for (let i of tabContent) {
    //     //     console.log();
    //     //     tabContent[i].classList.remove('show');
    //     //     tabContent[i].classList.add('hide');
    //     // }
    // }

    // hideTabContent(1)
    
    // const showTabContent = (b) => {
    //     if( tabContent[b].classList.contains('hide')){
    //         hideTabContent(0);
    //         tabContent[b].classList.remove('hide');
    //         tabContent[b].classList.add('show');

    //     }
    // }
    
    // info.addEventListener('click', function(event){
    //    let target = event.target;
    //    if(target.className == 'info-header-tab') {
    //        for( let i = 0; i < tab.length; i++){
    //            if (target == tab[i]){
    //                showTabContent(i);
    //                break;
    //            }
    //        }
    //    };
    // });

    // //Timer
    // let deadline = '2021-02-03';
    
    // function toZero(time) {
    //     if (time < 0 ) {
    //         return "00"
    //     } if (time < 10) {
    //         return `0 ${time}`;
    //     } 
    //      return time
    // }

    // function getTimeRemaining(endtime) {
    //     let t = Date.parse(endtime) - Date.parse(new Date()),
    //     seconds = Math.floor ( (t/1000) % 60 ) ,
    //     minutes = Math.floor ((t/1000/60) % 60),
    //     hours = Math.floor ((t/(1000*60*60)));
       
       
     
    //    seconds = toZero(seconds);
    //    minutes = toZero(minutes);
    //    hours = toZero(hours);
      
    //     return {
    //         'total': t,
    //         'hours': hours,
    //         'minutes': minutes,
    //         'seconds': seconds
    //     };
       
    // };

    // function setClock(id, endtime) {
       
    //      let timer = document.getElementById(id),
    //          hours = timer.querySelector('.hours'),
    //          minutes = timer.querySelector('.minutes'),
    //          seconds = timer.querySelector('.seconds');

    //         function updateClock() {
    //             let t = getTimeRemaining(endtime);
    //             hours.innerHTML = t.hours;
    //             minutes.innerHTML = t.minutes;
    //             seconds.innerHTML = t.seconds;

    //             if (t.total <= 0) {
    //               clearInterval(timeInterval);
    //             }
    //         };

    //         updateClock();
             
    //         let timeInterval = setInterval(updateClock, 1000);

            
    // };

    // setClock('timer', deadline);


// ///плавная прокрутка

//     const anchors = document.querySelectorAll('a.scroll-to')

//      for (let anchor of anchors) {
//        anchor.addEventListener('click', function (e) {
//          e.preventDefault()
         
//          const blockID = anchor.getAttribute('href')
         
//          document.querySelector(blockID).scrollIntoView({
//            behavior: 'smooth',
//            block: 'start'
//          })
//        })
//      }


    //Modal timer

    // let more = document.querySelector('.more'),
    //     overlay = document.querySelector('.overlay'),
    //     close = document.querySelector('.popup-close'),
    //     description_1 = document.getElementsByClassName('description-btn')[0],
    //     description_2 = document.getElementsByClassName('description-btn')[1];
    //     description_3 = document.getElementsByClassName('description-btn')[2];
    //     description_4 = document.getElementsByClassName('description-btn')[3];

    // more.addEventListener('click', function() {
    //     this.classList.add('more-splash');
    //     overlay.style.display = "block";
    //     document.body.style.overflow = 'hidden';

    // });

    // description_1.addEventListener('click', function() {
    //     this.classList.add('more-splash');
    //     overlay.style.display = "block";
    //     document.body.style.overflow = 'hidden';

    // });

    // description_2.addEventListener('click', function() {
    //     this.classList.add('more-splash');
    //     overlay.style.display = "block";
    //     document.body.style.overflow = 'hidden';

    // });

    // description_3.addEventListener('click', function() {
    //     this.classList.add('more-splash');
    //     overlay.style.display = "block";
    //     document.body.style.overflow = 'hidden';

    // });

    // description_4.addEventListener('click', function() {
    //     this.classList.add('more-splash');
    //     overlay.style.display = "block";
    //     document.body.style.overflow = 'hidden';

    // });

    // close.addEventListener('click', function() {
    //     overlay.style.display = "none";
    //     more.classList.remove('more-splash');
    //     document.body.style.overflow = '';
    // });


    //animation 
    // let splash = document.querySelector(".splash");

    // function myAnimation() {
    //     let elem = document.querySelector(".more"),
    //         pos = 0,
    //         id = setInterval(frame, 10);
    
    //         function frame() {
    //             if (pos == 300) {
    //                 clearInterval(id);
    //             } else {
    //                 pos++;
    //                 elem.style.top = pos + 'px';
    //                 elem.style.left = pos + 'px';
    //             }
    //         }
    // }
    
    // splash.addEventListener('click', myAnimation);
   

    // //form
    // let message = new Object();
    // message.loading = "Загрузка...."
    // message.success = "дякую, скоро з вами звяжимося";
    // message.failure = " что то пошло не так";

    // let form = document.getElementsByClassName('main-form')[0],
    //     ourForm = document.getElementById('form'),
    //     input = form.getElementsByTagName('input'),
    //     statusMessage = document.createElement('div');
    //     statusMessage.classList.add('status');
        

    //     form.addEventListener('submit', function(event) {
    //         event.preventDefault();
    //         form.appendChild(statusMessage);

    //         //AJAX
    //         let request = new XMLHttpRequest();
    //         request.open("GET", 'https://swapi.dev/api/people/');

    //         request.setRequestHeader("Content-Type", "application/json");

    //         // let formData = new FormData(form);

    //         request.send();

    //         request.onreadystatechange = function() {
    //             if (request.readyState < 4) {
    //                 statusMessage.innerHTML = message.loading;

    //             } else if (request.readyState === 4) {
    //                 if (request.status == 200 && request.status < 300) {
    //                     console.log({res: JSON.parse(request.response)});
    //                     statusMessage.innerHTML = message.success;
    //                     // добавіть Kонтент на страницу
    //                 }
    //                 else {
    //                     statusMessage.innerHTML = message.failure;
    //                     console.log({request});
    //                 }
    //             }
    //         }
    //         for (let i = 0; i < input.length; i++) {
    //             input[i].value = '';
    //             //очищаем поля ввода
    //         }



    //     });

        // //contacts
        
        // ourForm.addEventListener('submit', function(event) {
        //     event.preventDefault();
        //     ourForm.appendChild(statusMessage);

        //     //AJAX
        //     let request = new XMLHttpRequest();
        //     request.open("GET", 'https://swapi.dev/api/people/');

        //     request.setRequestHeader("Content-Type", "application/json");

        //     // let formData = new FormData(form);

        //     request.send();

        //     request.onreadystatechange = function() {
        //         if (request.readyState < 4) {
        //             statusMessage.innerHTML = message.loading;

        //         } else if (request.readyState === 4) {
        //             if (request.status == 200 && request.status < 300) {
        //                 console.log({res: JSON.parse(request.response)});
        //                 statusMessage.innerHTML = message.success;
        //                 // добавіть Kонтент на страницу
        //             }
        //             else {
        //                 statusMessage.innerHTML = message.failure;
        //                 console.log({request});
        //             }
        //         }
        //     }
        //     for (let i = 0; i < input.length; i++) {
        //         input[i].value = '';
        //         //очищаем поля ввода
        //     }



        // });
  


   

        // //contacts
        // let message = new Object();
        // message.loading = "Загрузка, чекайте ще...."
        // message.success = "дякую, скоро з вами звяжимося)";
        // message.failure = " что то пошло не так";
    
        // let ourForm = document.getElementsByClassName('form')[0],
        //     input = form.getElementsByTagName('input'),
        //     statusMessage = document.createElement('div');
        //     statusMessage.classList.add('status');
    
        //     ourForm.addEventListener('submit', function(event) {
        //         event.preventDefault();
        //         form.appendChild(statusMessage);
    
        //         //AJAX
        //         let request = new XMLHttpRequest();
        //         request.open("GET", 'https://swapi.dev/api/people/');
    
        //         request.setRequestHeader("Content-Type", "application/json");
    
        //         // let formData = new FormData(form);
    
        //         request.send();
    
        //         request.onreadystatechange = function() {
        //             if (request.readyState < 4) {
        //                 statusMessage.innerHTML = message.loading;
    
        //             } else if (request.readyState === 4) {
        //                 if (request.status == 200 && request.status < 300) {
        //                     console.log({res: JSON.parse(request.response)});
        //                     statusMessage.innerHTML = message.success;
        //                     // добавіть Kонтент на страницу
        //                 }
        //                 else {
        //                     statusMessage.innerHTML = message.failure;
        //                     console.log({request});
        //                 }
        //             }
        //         }
        //         for (let i = 0; i < input.length; i++) {
        //             input[i].value = '';
        //             //очищаем поля ввода
        //         }
    
    
    
        //     });

    // //slider

    // let slideIndex = 1,
    //     slides = document.getElementsByClassName('slider-item'),
    //     prev = document.querySelector('.prev'),
    //     next = document.querySelector('.next'),
    //     dotsWrap = document.querySelector('.slider-dots'),
    //     dots = document.getElementsByClassName('dot');
    //     sliderList = document.querySelector('.wrap'),
    //     slideWidth = 300,
    //     pos = 0;

    
    // showSlides(slideIndex);

    // function showSlides(n) {
        
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     };

    //     for ( let i = 0; i < slides.length; i++) {
    //         slides[i].style.display = 'none';
    //     };

    //     // dots.forEach(elem => {
    //     //     elem.classList.remove('dot-active');
    //     // })
    //     for (let i = 0; i < dots.length; i++) {
    //         dots[i].classList.remove('dot-active');
    //         // i - ідентифікатор
    //     };

    //     slides[slideIndex - 1].style.display = 'block';
    //     dots[slideIndex - 1].classList.add('dot-active');
    //    /// dots[slideIndex + 1].classList.remove('dot-active');

    // }
     
    // function plusSlides (n) {
    //     showSlides(slideIndex += n)
    // }

    // function currentSlide(n) {
    //     showSlides(slideIndex = n)
    // }

    // prev.addEventListener('click', function(){
    //     plusSlides(-1);
    //     // slides.style.left = -(slideWidth * pos) + 'px';
    //     // slides.style.transition = 'left 0.6s ease-in-out';
    // });

    // prev.onclick = scrollToPrev;
    // function scrollToPrev() {
    //     pos--;
      
    //     if (pos < 0) {
    //       var children = sliderList.children;
      
    //       sliderList.style.transition = null;
    //       sliderList.style.left = -(pos + 2) * slideWidth + 'px';
    //       sliderList.insertBefore(children[slides.length - 1], children[0]);
    //       pos++;
    //      }
    //     requestAnimationFrame(function(){ //ожидаем следующего запланированного reflow/repain;
    //       requestAnimationFrame(function(){ 
    //         //предыдущий reflow рассчитал новый dom элемент
    //         //можно делать анимацию.
    //         sliderList.style.transition = 'left 0.6s linear';
    //         sliderList.style.left = -(slideWidth * pos) + 'px';
    //       })
    //     });
    //   }

    // next.addEventListener('click', function(){
    //     plusSlides(1);
    // });
   
    // // next.onclick = scrollToNext;
    // // function scrollToNext() {
    // //     pos++;
      
    // //     if (pos > slides.length -1) {
    // //       var children = sliderList.children;
      
    // //       sliderList.style.transition = null;
    // //       sliderList.style.right = -(pos - 2) * slideWidth + 'px';
    // //       sliderList.insertBefore(children[slides.length - 1], children[0]);
    // //       pos++;
    // //      }
    // //     requestAnimationFrame(function(){ //ожидаем следующего запланированного reflow/repain;
    // //       requestAnimationFrame(function(){ 
    // //         //предыдущий reflow рассчитал новый dom элемент
    // //         //можно делать анимацию.
    // //         sliderList.style.transition = ' right 0.6s linear';
    // //         sliderList.style.right = (slideWidth * pos) + 'px';
    // //       })
    // //     });
    // //   }

    
      
    // //     // if (pos > slides.length -1) {
    // //       var children = sliderList.children;
      
    // //       sliderList.style.transition = null;
    // //       sliderList.style.right = (pos - 2) * slideWidth + 'px';
    // //       sliderList.insertBefore(children[slides.length - 1], children[0]);
    // //       pos++;
    // //      }
    // //     requestAnimationFrame(function(){ //ожидаем следующего запланированного reflow/repain;
    // //       requestAnimationFrame(function(){ 
    // //         //предыдущий reflow рассчитал новый dom элемент
    // //         //можно делать анимацию.
    // //         sliderList.style.transition = 'right 0.6s ease-in-out';
    // //         sliderList.style.right = (slideWidth * pos) + 'px';
    // //       })
    // //     });
    // //   }


    // dotsWrap.addEventListener('click', function(event) {
    //     for (let i = 0; i < dots.length + 1; i++) {
    //         if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
    //             currentSlide(i);
    //         }
    //     }
    // });

   //slider animation
//    document.querySelectorAll(".slider-item").animate(
       
//         // keyframes
//         { transform: 'translate3D(0, 0, 0)' },
//         { transform: 'translate3D(0, -300px, 0)' }, {
//         // timing options
//         duration: 1000,
//         iterations: Infinity
//       }
//     );
     



//    //calculate
//     let persons = document.getElementsByClassName('counter-block-input')[0],
//         restDays = document.getElementsByClassName('counter-block-input')[1],
//         place = document.getElementById('select'),
//         totalValue = document.getElementById('total'),
//         personsSum = 0,
//         daysSum = 0,
//         total = 0;

//         totalValue.innerHTML = 0;

//         persons.addEventListener('change', function() {
//             personsSum = +this.value
//             total = (daysSum + personsSum)*4000;
//             ///totalValue.innerHTML = total;
//             if (restDays.value == '') {
//                 totalValue.innerHTML = 0;
//             } else {
//                 totalValue.innerHTML = total;
//             }
//         });

//         restDays.addEventListener('change', function() {
//             daysSum = +this.value;
//             total = (daysSum + personsSum)*4000;
//            /// totalValue.innerHTML = total;
//            if (persons.value == '') {
//             totalValue.innerHTML = 0;
//             } else {
//             totalValue.innerHTML = total;
//             }

//         });

//         place.addEventListener('change', function() {
//             if (restDays.value == '' || persons.value == '') {
//                 totalValue.innerHTML = 0;
//             } else {
//                 let a = total;
//                 totalValue.innerHTML = a * this.options[this.selectedIndex].value;
//                 }

//         });

      

});