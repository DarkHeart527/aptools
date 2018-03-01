const at = {
  getTime: function(type) {
    if (type == 'normal') {
      let time = new Date();
      let hour = time.getHours();
      if (hour > 12) {
        hour = Number(hour) - 12;
      }
      let minute = time.getMinutes();
      time = `${hour}:${minute}`;
      return time;
    }
    else if (type == 'extended') {
      let time2 = new Date();
      let hour = time2.getHours();
      let second = time2.getSeconds();
      if (hour > 12) {
        hour = Number(hour) - 12;
      }
      let minute = time2.getMinutes();
      time2 = `${hour}:${minute}:${second}`;
      return time2;
    } else {
      at.getTime('normal');
    }
  },
  initialLeapYear: 2000,
}
