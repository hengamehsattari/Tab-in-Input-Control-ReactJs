import { useRef, useEffect } from "react";
import './App.css'

export const App = () => {
  const InputRefName = useRef(null);
  const InputRefEmail = useRef(null);
  const InputRefPassword = useRef(null);
  const InputRefConfirmPass = useRef(null);

  useEffect(() => {
    InputRefEmail.current.focus();
  }, []);

  return (
    <div className="container">
      <img src={`./image/4.jpg`} alt="me" />
      
      <form>
      <h1>Register Form</h1>
        <input
          ref={InputRefName}
          placeholder="Your Name"
          type="text"
          onKeyDown={(e) => {
            e.preventDefault();
            if (e.keyCode === 9) {
              InputRefConfirmPass.current.focus();
            }
          }}
        ></input>
        <input
          ref={InputRefEmail}
          placeholder="Email Address"
          type="Email"
          onKeyDown={(e) => {
            e.preventDefault();
            if (e.keyCode === 9) {
              InputRefName.current.focus();
            }
          }}
        ></input>
        <input
          ref={InputRefPassword}
          placeholder="Password"
          type="Password"
          onKeyDown={(e) => {
            e.preventDefault();
            if (e.keyCode === 9) {
              InputRefEmail.current.focus();
            }
          }}
        ></input>
        <input
          ref={InputRefConfirmPass}
          placeholder="Confirm Password"
          type="Password"
          onKeyDown={(e) => {
            e.preventDefault();
            if (e.keyCode === 9) {
              InputRefPassword.current.focus();
            }
          }}
        ></input>
        <input value="Register" type="submit"></input>
      </form>
    </div>
  );
};


