//таймер
const timer = document.createElement('p');
timer.classList.add('timer');
document.body.insertBefore(timer, document.querySelector('script'));

function startTimer() {
  setInterval (() => {
  const thisYear = new Date().getFullYear();
  // console.log(thisYear);

  const thisMonth = new Date().getMonth() + 1;
  // console.log(`сейчас ${thisMonth} месяц`);
  const deltaMonth = 12 - thisMonth;
  // console.log(`значит осталось ${deltaMonth} месяцев`);
  
  const maxDays = new Date(thisYear, thisMonth, 0).getDate();
  // console.log(`в ${thisMonth} месяце ${maxDays} дней`);
  const thisDay = new Date().getDate();
  // console.log(`сейчас ${thisDay} день ${thisMonth} месяца`);
  const deltaDay = maxDays - thisDay;
  // console.log(`значит осталось ${deltaDay} дней`);

  const thisHour = new Date().getHours();
  const deltaHour = 24 - thisHour;
  // console.log(`в сутках 24 часа, сейчас ${thisHour} час, значит остлось ${deltaHour} часов`)

  const thisMinute = new Date().getMinutes();
  const deltaMin = 60 - thisMinute;
  // console.log(`в часе 60 минут, сейчас ${thisMinute} минут, значит остлось ${deltaMin} минут`)

  const thisSecond = new Date().getSeconds();
  const deltaSec = 60 - thisSecond;
  // console.log(`в минуте 60 секунд, сейчас ${thisSecond} секунд, значит остлось ${deltaSec} секунд`)
  
  timer.innerHTML = `Осталось ${deltaMonth} месяцев ${deltaDay} дней ${deltaHour} часов ${deltaMin} минут ${deltaSec} секунд`
  }, 1000)
}

startTimer();