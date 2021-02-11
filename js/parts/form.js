function form() {
     //form
     let message = new Object();
     message.loading = "Загрузка...."
     message.success = "дякую, скоро з вами звяжимося";
     message.failure = " что то пошло не так";
 
     let form = document.getElementsByClassName('main-form')[0],
         ourForm = document.getElementById('form'),
         input = form.getElementsByTagName('input'),
         statusMessage = document.createElement('div');
         statusMessage.classList.add('status');
         
 
         form.addEventListener('submit', function(event) {
             event.preventDefault();
             form.appendChild(statusMessage);
 
             //AJAX
             let request = new XMLHttpRequest();
             request.open("GET", 'https://swapi.dev/api/people/');
 
             request.setRequestHeader("Content-Type", "application/json");
 
             // let formData = new FormData(form);
 
             request.send();
 
             request.onreadystatechange = function() {
                 if (request.readyState < 4) {
                     statusMessage.innerHTML = message.loading;
 
                 } else if (request.readyState === 4) {
                     if (request.status == 200 && request.status < 300) {
                         console.log({res: JSON.parse(request.response)});
                         statusMessage.innerHTML = message.success;
                         // добавіть Kонтент на страницу
                     }
                     else {
                         statusMessage.innerHTML = message.failure;
                         console.log({request});
                     }
                 }
             }
             for (let i = 0; i < input.length; i++) {
                 input[i].value = '';
                 //очищаем поля ввода
             }
 
 
 
         });
}
module.exports = form;