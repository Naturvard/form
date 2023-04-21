import { useReducer, useState, useRef } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword:"",
    birthday:"",
   
   
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Should be 3-16 characters and should not contain special character",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter valid email",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        " Should contain 8-12 charaters 1 number 1 letter 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Please rewrite the correct password",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id: 5,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",

      label: "Birthday",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); //Otherwise whne we submit it will refresh it everytime
  };
  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  console.log(values);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
