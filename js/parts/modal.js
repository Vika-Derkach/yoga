function modal() {
    let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    description_1 = document.getElementsByClassName('description-btn')[0],
    description_2 = document.getElementsByClassName('description-btn')[1];
    description_3 = document.getElementsByClassName('description-btn')[2];
    description_4 = document.getElementsByClassName('description-btn')[3];

     more.addEventListener('click', function() {
         this.classList.add('more-splash');
         overlay.style.display = "block";
         document.body.style.overflow = 'hidden';
     
     });
     
     description_1.addEventListener('click', function() {
         this.classList.add('more-splash');
         overlay.style.display = "block";
         document.body.style.overflow = 'hidden';
     
     });
     
     description_2.addEventListener('click', function() {
         this.classList.add('more-splash');
         overlay.style.display = "block";
         document.body.style.overflow = 'hidden';
     
     });
     
     description_3.addEventListener('click', function() {
         this.classList.add('more-splash');
         overlay.style.display = "block";
         document.body.style.overflow = 'hidden';
     
     });
     
     description_4.addEventListener('click', function() {
         this.classList.add('more-splash');
         overlay.style.display = "block";
         document.body.style.overflow = 'hidden';
     
     });
     
     close.addEventListener('click', function() {
         overlay.style.display = "none";
         more.classList.remove('more-splash');
         document.body.style.overflow = '';
     });
    }
module.exports = modal;