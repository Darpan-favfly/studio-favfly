const daysLeft = (dob) => {
  // set the birthdate
  const birthdate = new Date(dob);

  // get today's date
  const today = new Date();

  // set the birthdate for this year
  const thisYearBirthday = new Date(
    today.getFullYear(),
    birthdate.getMonth(),
    birthdate.getDate()
  );

  // if the birthday has already passed this year, set it for next year instead
  if (
    birthdate.getMonth() === today.getMonth() &&
    birthdate.getDate() === today.getDate()
  ) {
    return 0;
  } else if (thisYearBirthday < today) {
    thisYearBirthday.setFullYear(thisYearBirthday.getFullYear() + 1);
  }

  // calculate the difference in milliseconds between the two dates
  const diffMs = thisYearBirthday - today;

  // convert the difference to days
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  return diffDays;
};

export default daysLeft;
