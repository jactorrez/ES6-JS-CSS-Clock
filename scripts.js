
const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
let currentHour;
let currentMinute;
let totalDeg = 90;

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = (now.getHours() + 24) % 12 || 12;
    //Don't calculate and update every second, only when value changes  
    if(hours !== currentHour){
        const hoursDegrees = (((hours) / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
        currentHour = hours;
    }

    if(minutes !== currentMinute){
      const minutesDegrees = ((minutes / 60) * 360) + 90;
      minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
      currentMinute = minutes;
    }
  
 
  let secondsDegrees = ((seconds / 60) * 360) + totalDeg;

   if(seconds === 59){
    totalDeg = secondsDegrees + 6;
  }

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000); 