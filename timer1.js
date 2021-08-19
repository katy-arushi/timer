const alarms = process.argv.slice(2);

for (const alarm of alarms) {
  if ((!isNaN(alarm)) && alarm > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (alarm * 1000))
  }
}