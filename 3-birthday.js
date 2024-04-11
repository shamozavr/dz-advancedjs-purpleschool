function idOldEnough(birthday, ageToCheck = 14) {
  const [day, month, year] = birthday.split('-');
  const now = Date.now()
  const birthdayDate = new Date(year, month-1, day);
  const birthdaySecs = birthdayDate.getTime();
  const ageSeconds = now - birthdaySecs;
  const age = new Date(ageSeconds).getFullYear() - 1970;
  return age > ageToCheck;
}

console.log(idOldEnough('18-12-1992', 40))
console.log(idOldEnough('18-12-1992'))
console.log(idOldEnough('18-06-2010'))