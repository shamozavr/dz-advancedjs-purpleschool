const AGETOCHECK = 14;

function idOldEnough(birthday) {
  const birthdayArray = birthday.split('-');
  const now = Date.now()
  const birthdayDate = new Date(birthdayArray[2], birthdayArray[1]-1, birthdayArray[0]);
  const birthdaySecs = birthdayDate.getTime();
  const ageSeconds = now - birthdaySecs;
  const age = new Date(ageSeconds).getFullYear() - 1970;
  return age > AGETOCHECK;
}

console.log(idOldEnough('18-12-1992'))
console.log(idOldEnough('18-06-2010'))