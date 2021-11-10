import { refs } from "vue";

export const validName = (name) => {
  const validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
};

export const focusNextInput = (from, to) => {
  // const d = document.body.getElementById(from)
  // const first = ref(null)
  console.log(refs());
  if (refs(from).value.length) {
    document.body.getElementById(to).focus();
  }
};
