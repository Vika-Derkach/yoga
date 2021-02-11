function timer() {
    //Timer
    let deadline = '2021-02-03';
    
    function toZero(time) {
        if (time < 0 ) {
            return "00"
        } if (time < 10) {
            return `0 ${time}`;
        } 
         return time
    }

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor ( (t/1000) % 60 ) ,
        minutes = Math.floor ((t/1000/60) % 60),
        hours = Math.floor ((t/(1000*60*60)));
       
       
     
       seconds = toZero(seconds);
       minutes = toZero(minutes);
       hours = toZero(hours);
      
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
       
    };

    function setClock(id, endtime) {
        let timeInterval;
         let timer = document.getElementById(id),
             hours = timer.querySelector('.hours'),
             minutes = timer.querySelector('.minutes'),
             seconds = timer.querySelector('.seconds');

            function updateClock() {
                let t = getTimeRemaining(endtime);
                hours.innerHTML = t.hours;
                minutes.innerHTML = t.minutes;
                seconds.innerHTML = t.seconds;

                if (t.total <= 0 && timeInterval) {
                  clearInterval(timeInterval);
                }
            };

            updateClock();
             
            timeInterval = setInterval(updateClock, 1000);

            
    };

    setClock('timer', deadline);
}

module.exports = timer;