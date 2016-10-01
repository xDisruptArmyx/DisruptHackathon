const data = require('./../data/G3');
console.log(parser(data)[0]);
function parser(data) {
  const items = data.items;

  const array = [];

  for(var i = 0; i < items.length; i++) {
    const obj = {};
    obj.person = items[i].organizer.displayName;

    obj.event = 'Executive Engagement';

    obj.summary = items[i].summary;

    //Start time
    var string = items[i].start.dateTime;
    var times = string.substring(string.indexOf('T') + 1, string.length);
    times = times.substring(0, times.indexOf('-'));
    obj.start = times;

    //Finish time
    var string2 = items[i].end.dateTime;
    var times2 = string2.substring(string2.indexOf('T') + 1, string2.length);
    times2 = times2.substring(0, times2.indexOf('-'));
    obj.finish = times2;

    obj.date = string.substring(0, string.indexOf('T'));

    obj.hours = Number(obj.finish.substring(0, obj.finish.indexOf(':'))) - Number(obj.start.substring(0, obj.start.indexOf(':')));

    //Pushes into array
    array.push(obj);
  }
  return array;
}

