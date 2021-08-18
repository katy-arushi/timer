const alarms = process.argv.slice(2);

for (let i = 0; i < alarms.length; i++) {
  if ((isNaN(alarms[i])) || alarms[i] <= 0) {
    i++;
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (alarms[i] * 1000))
  }
}