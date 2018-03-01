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
      let time = new Date();
      let hour = time.getHours();
      //let second = time.getSeconds();
      if (hour > 12) {
        hour = Number(hour) - 12;
      }
      let minute = time.getMinutes();
      time = `${hour}:${minute}:`;
      return time;
    } else {
      at.getTime('normal');
    }
  },
  initialLeapYear: 2000,
}
