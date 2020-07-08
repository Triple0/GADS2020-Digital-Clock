const activeClock = function () {
    
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    hour = checkTime(hour)
    minute = checkTime(minute);
    second = checkTime(second);
    
    let time = hour + ":" + minute + ":" + second;
    
    if(hour === 10) {
        document.getElementById("show").src = "./images/breakfast.jpg";
    } else if (hour === 14) {
        document.getElementById("show").src = "./images/lunch.png";
    } else if (hour === 20) {
        document.getElementById("show").src = "./images/dinner.jpg";
    } else if (hour === 22) {
        document.getElementById("show").src = "./images/bedtime.png";
    } else {
        document.getElementById("show").src = "./images/learn.jpg";
    }
  
    document.getElementById("clock").textContent = time;

    let t = setTimeout(activeClock, 500);
  }

  function checkTime(value) {
      //Append leading zero to numbers below 10
      if (value < 10) {value = "0" + value};
      return value;
  }

activeClock();