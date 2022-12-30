function januaryDays(firstWeekDay) {
  let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

  let indexWeek = week.indexOf (firstWeekDay);

  for (let i = 0; i < 31; ++i) {
    let day = (indexWeek + i) % 7;
    console.log(`${i + 1} января, ${week[day]}`);
  }
}

januaryDays("понедельник")
