// import { refs } from "vue";

export const validName = (name) => {
  const validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
};

// export const focusNextInput = (from, to) => {
//   // const d = document.body.getElementById(from)
//   // const first = ref(null)
//   // console.log(refs());
//   // if (refs(from).value.length) {
//   //   document.body.getElementById(to).focus();
//   // }
// };
export const user = () => {
  if (window.location.hostname === "localhost") {
    return {
      user_id: "95",
      firstname: "susan",
      lastname: "frank",
      email: "didiersenou64@gmail.com",
      created_at: "2021-11-15 11:02:13",
      bank_account: { account_no: "none", bank_name: "none" },
      otp: "",
      wallet: {
        amount: 4200,
        address: "$2a$06$WRejq4I2lJ0brhT6MdPRMu5iq/ukoDXly3U3ZjuW40yrZxg2CH902",
      },
      token: "",
      portfolio: [],
    };
  }
  return null;
};
