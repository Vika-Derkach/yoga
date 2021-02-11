function contacts() {
    //contacts
    const ourForm = document.getElementById('form');

    ourForm.addEventListener('submit', function(event) {
        event.preventDefault();
        ourForm.appendChild(statusMessage);

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
module.exports = contacts;