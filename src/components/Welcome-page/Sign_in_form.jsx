import React from "react";
import { CgClose } from "react-icons/cg";


export default function Sign_in_form() {
  return (
    <form className="default_form">
      <CgClose className="close-icon" onClick={() => setModalActive(false)} />
      <input type="text" placeholder="name" />
      <input type="email" name="" id="" placeholder="eMail" />
      <button type="submit">Sign up</button>
    </form>
  );
};
