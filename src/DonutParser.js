var donutParser = function(data) {
  let array = [[],[],[],[],[],[],[]];
  data.forEach((obj) => {
    if(obj.summary === 'army'){
      array[0].push(obj.hours)
    } else if (obj.summary === 'supporters'){
      array[1].push(obj.hours)
    } else if(obj.summary === 'nato'){
      array[2].push(obj.hours)
    } else if(obj.summary === 'joint'){
      array[3].push(obj.hours)
    } else if(obj.summary === 'staff'){
      array[4].push(obj.hours)
    } else if(obj.summary === 'allies'){
      array[5].push(obj.hours)
    } else if(obj.summary === 'officals'){
      array[6].push(obj.hours)
    }
  })
  return array;
}

module.exports = donutParser;
