const hoursBySummary = function(data){
  const dataBySummary = data.map((el,index)=>{
    if(el.summary === 'nato'){
      return {
        hours: el.hours,
        name: el.person,
        summary: el.summary
      };
    }else if(el.summary === 'staff'){
      return {
        hours: el.hours,
        name: el.person,
        summary: el.summary
      };
    }else if(el.summary === 'navy'){
      return {
        hours: el.hours,
        name: el.person,
        summary: el.summary
      };
    }else if(el.summary === 'army'){
      return {
        hours: el.hours,
        name: el.person,
        summary: el.summary
      };
    }else if(el.summary === 'joint'){
      return {
        hours: el.hours,
        name: el.person,
        summary: el.summary
      };
    }else if(el.summary === 'allies'){
      return {
        hours: el.hours,
        name: el.person,
        summary: el.summary
      };
    }else if(el.summary === 'supporters'){
      return {
        hours: el.hours,
        name: el.person,
        summary: el.summary
      };
    }else if(el.summary === 'officials'){
      return {
        hours: el.hours,
        name: el.person,
        summary: el.summary
      };
    }
  });
  console.log(dataBySummary + 'DATA BY SUMMARY')
  return dataBySummary;
}

module.exports=hoursBySummary;