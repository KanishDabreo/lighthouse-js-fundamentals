const whichSchool = function (age) {
  if (age <= 12) {
    return "Elementary School";
  } else if (age <= 18 && age >= 13) {
    return "Secondary School";
  } else if (age < 100 || age > 18) {
    return "Lighthouse Labs";
  }

};