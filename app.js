function showTime() {
  let time = new Date(),
    h = ("0" + time.getHours()).slice(-2),
    m = ("0" + time.getMinutes()).slice(-2),
    s = ("0" + time.getSeconds()).slice(-2);

  let hour = document.querySelector('#hour'),
    minute = document.querySelector('#minute'),
    second = document.querySelector('#second'),
    digitalHour = document.querySelector('#digital__hour'),
    digitalMinute = document.querySelector('#digital__minute'),
    digitalSecond = document.querySelector('#digital__second');

  second.style.transform = `rotate(${s * 6}deg)`
  minute.style.transform = `rotate(${m * 6}deg)`
  hour.style.transform = `rotate(${h * 30}deg)`

  if (m <= 12) hour.style.transform = `rotate(${h * 30}deg)`
  else if (m > 12 && m <= 24) hour.style.transform = `rotate(${h*30+6}deg)`
  else if (m > 24 && m <= 36) hour.style.transform = `rotate(${h*30+12}deg)`
  else if (m > 36 && m <= 48) hour.style.transform = `rotate(${h*30+18}deg)`
  else if (m > 48 && m < 60) hour.style.transform = `rotate(${h*30+24}deg)`

  digitalHour.innerHTML = h;
  digitalMinute.innerHTML = m;
  digitalSecond.innerHTML = s;
}

setInterval(() => showTime(), 1000);
