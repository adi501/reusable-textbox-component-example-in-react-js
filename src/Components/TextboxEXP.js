import React, { useState } from "react";

import Textbox from "./common/Textbox/index";

const TextboxEXP = () => {
  const [txtName, settxtName] = useState("");

  const [txtEmail, settxtEmail] = useState("Default Data");

  const [txtPassword, settxtPassword] = useState("");

  return (
    <>
      <h3>Textbox reusable component example</h3>

      <Textbox
        id={"txtName"}
        name={"txtName"}
        type={"text"}
        placeholder={"Enter Name"}
        className={"txtStyle1"}
        isreadOnly={false}
        value={txtName}
        onChangeHandler={e => settxtName(e.target.value)}
      />

      <Textbox
        id={"txtEmail"}
        name={"txtEmail"}
        type={"text"}
        placeholder={"Enter Email"}
        className={"txtStyle1"}
        value={txtEmail}
        onChangeHandler={e => settxtEmail(e.target.value)}
      />

      <Textbox
        id={"txtPassword"}
        name={"txtPassword"}
        type={"password"}
        placeholder={"Enter Password"}
        className={"txtStyle2"}
        value={txtPassword}
        onChangeHandler={e => settxtPassword(e.target.value)}
      />
    </>
  );
};

export default TextboxEXP;
