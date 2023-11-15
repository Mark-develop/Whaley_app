import React, { useState } from "react";
import Sign_in_popup from "../Popup";
import { CgClose } from "react-icons/cg";

const Welcome_page = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="Welcome_page">
      <div className="WP_baner"></div>
      <div className="WP_account bg-neutral/40">
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
          suscipit exercitationem perspiciatis recusandae id commodi incidunt
          corrupti voluptatibus reprehenderit veniam?
        </p>

        <div className="login_block">
          <p>alredy registred?</p>
          <button
            onClick={() => setModalActive(true)}
            className="accaunt_sign_in btn bg-blue hover:bg-blue/80 transition-all"
          >
            Sign in
          </button>
          <button className="accaunt_sign_in btn bg-darkblue/70 hover:bg-darkblue/50 transition-all">
            Sign up
          </button>
        </div>
      </div>

      <Sign_in_popup active={modalActive} setActive={setModalActive}>
        <form className="default_form">
          <CgClose className="close-icon" onClick={() => setModalActive(false)}/>
          <input type="text" placeholder="name" />
          <input type="email" name="" id="" placeholder="eMail" />
          <button type="submit">Sign up</button>
        </form>
      </Sign_in_popup>
    </div>
  );
};

export default Welcome_page;
