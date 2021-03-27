function datedifference(date1,date2){
  date1 = new Date(date1);
  date2 = new Date(date2);
  diffTime = Math.abs(date2 - date1);
  diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

