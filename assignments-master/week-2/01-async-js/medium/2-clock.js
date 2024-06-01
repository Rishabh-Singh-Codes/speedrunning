setInterval(function () {
  const date = new Date();

  const hrs = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();

  console.log(`${hrs > 12 ? hrs - 12: hrs} : ${mins} : ${secs} ${hrs > 12 ? 'PM': 'AM'}`);
}, 1000);
