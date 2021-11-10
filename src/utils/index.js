export const validName = (name) => {
  const validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
};
export const focusNextInput = (from, to) => {
  // console.log(from.target);
  if (from.value.length) {
    document.getElementById(to).focus();
  }
};
