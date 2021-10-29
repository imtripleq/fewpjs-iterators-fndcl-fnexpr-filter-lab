const findMatching = (driver, string) => {
  const b = driver.filter((w) => {
    if (w === string) return w === string;
    else return w.toLowerCase() === string.toLowerCase();
  });
  return b;
};

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

const fuzzyMatch = (a, b) => {
  return a.filter(
    (y) => y.charAt(0).toLowerCase().indexOf(b.charAt(0).toLowerCase()) !== -1
  );
  ////// Worked for the test, but not in real world. It detects only first character.
  // return a.filter((y) => y.toLowerCase().indexOf(b.toLowerCase()) !== -1);
};

fuzzyMatch(drivers, "s");
const matchName = (a, b) => {
  return a.filter((y) => y.name.toLowerCase().indexOf(b.toLowerCase()) !== -1);
};
