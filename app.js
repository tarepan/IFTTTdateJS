function IFTTTdateToJSDate(OccurredAt){
  // 1    2   3       4 5 6
  //July 27, 2018 at 11:28PM
  // worst code, ****!!
  var parts = /(\D+) (\d+), (\d+) at (\d+):(\d+)(AM|PM)/.exec(OccurredAt);
  parts[1] = convertMonth(parts[1]);
  if(parts[6]=="PM"){
    parts[4] = parseInt(parts[4]) + 12;
  }
  return new Date(parts[3], parts[1], parts[2], parts[4], parts[5]);
}

function convertMonth(month){
  switch(month) {
    case "January" : return 0;
    case "February" : return 1;
    case "March" : return 2;
    case "April" : return 3;
    case "May" : return 4;
    case "June" : return 5;
    case "July" : return 6;
    case "August" : return 7;
    case "September" : return 8;
    case "October" : return 9;
    case "November" : return 10;
    case "December" : return 11;
  }
module.exports = IFTTTdateToJSDate;
