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
export const user = () => {
  if (window.location.hostname === "localhost") {
    return {
      user_id: "5",
      firstname: "James",
      lastname: "Tichdns",
      email: "gulephil44@gmail.com",
      created_at: "2021-11-15 00:52:42",
      bank_account: { account_no: "none", bank_name: "none" },
      otp: "874484",
      wallet: {
        amount: 0,
        address: "$2a$06$WRKRFEsAP/meZbjMP1lkOuzyu7jtZ66cu8uH0dQZPKP3pwzDwYRvi",
      },
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYW5rX2FjY291bnQiOnsiYWNjb3VudF9uYW1lIjoibm9uZSIsImFjY291bnRfbm8iOiJub25lIn0sImVtYWlsIjoiZ3VsZXBoaWw0NEBnbWFpbC5jb20iLCJleHAiOjE2MzY5OTI0NzIsImZpcnN0bmFtZSI6IkphbWVzIiwiaWQiOiI1IiwibGFzdG5hbWUiOiJUaWNoZG5zIiwib3RwIjo4NzQ0ODQsInBvcnRmb2xpbyI6W3siaWQiOiI1Iiwic3ltYm9sIjoiQVdTIiwiaW1hZ2VfdXJsIjoiaHR0cHM6Ly9idXlzaGFyZXMuY28udWsvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDcvU2NyZWVuc2hvdC0yMDIwLTA3LTA0LWF0LTE2LjQ5LjU1LnBuZyIsInF1YW50aXR5IjoiMTIwIiwidW5pdF9wcmljZSI6IjEyMDAiLCJlcXVpdHlfdmFsdWUiOiIxNDQwMDAiLCJwZXJjZW50YWdlX2NoYW5nZSI6Ii05In0seyJpZCI6IjE1Iiwic3ltYm9sIjoiVFNMQSIsImltYWdlX3VybCI6Imh0dHBzOi8vZy5mb29sY2RuLmNvbS9hcnQvY29tcGFueWxvZ29zL3NxdWFyZS90c2xhLnBuZyIsInF1YW50aXR5IjoiMjUiLCJ1bml0X3ByaWNlIjoiODAwIiwiZXF1aXR5X3ZhbHVlIjoiMjAwMDAiLCJwZXJjZW50YWdlX2NoYW5nZSI6Ii0xIn1dLCJ3YWxsZXQiOnsiYWRkcmVzcyI6IiQyYSQwNiRXUktSRkVzQVAvbWVaYmpNUDFsa091enl1N2p0WjY2Y3U4dUgwZFFaUEtQM3B3ekR3WVJ2aSIsImFtb3VudCI6IjAuMDAwMDAwIn0sIndoZW4iOiIyMDIxLTExLTE1IDAwOjUyOjQyIn0.rXQr5d2NDQ-JI4aOHQobURfvJKqFNqCPsfekxAKU7_c",
      portfolio: [
        {
          id: "5",
          symbol: "AWS",
          image_url:
            "https://buyshares.co.uk/wp-content/uploads/2020/07/Screenshot-2020-07-04-at-16.49.55.png",
          quantity: "120",
          unit_price: "1200",
          equity_value: "144000",
          percentage_change: "-9",
        },
        {
          id: "15",
          symbol: "TSLA",
          image_url: "https://g.foolcdn.com/art/companylogos/square/tsla.png",
          quantity: "25",
          unit_price: "800",
          equity_value: "20000",
          percentage_change: "-1",
        },
      ],
    };
  }
  return null;
};
