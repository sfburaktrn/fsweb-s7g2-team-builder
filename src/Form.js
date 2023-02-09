import React, { useState } from "react";

function Form(props) {
  const { handleSubmitCb } = props;

  const [veri, setVeri] = useState({
    isim: "",
    soyad: "",
    mail: "",
    görev: "",
  });

  const changeHandler = (event) => {
    const { value, name } = event.target;
    console.log(event.target.value);

    const newS = {
      ...veri,
      [name]: value,
    };
    setVeri(newS);
  };

  function handleSubmit(event) {
    event.preventDefault();
    return handleSubmitCb(veri);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Member Add:</legend>
          <label htmlfor="fname">İsim:</label>
          <input
            onChange={changeHandler}
            type="text"
            id="fname"
            name="isim"
            value={veri.isim}
          />

          <label htmlfor="fsurname">Soyad:</label>
          <input
            onChange={changeHandler}
            type="text"
            id="fsurname"
            name="soyad"
            value={veri.soyad}
          />
          <label htmlfor="fmail">Mail:</label>
          <input
            onChange={changeHandler}
            type="text"
            id="fmail"
            name="mail"
            value={veri.mail}
          />

          <label htmlfor="fgorev">Görev:</label>
          <input
            onChange={changeHandler}
            type="text"
            id="fgorev"
            name="görev"
            value={veri.görev}
          />

          <button type="submit" value="Submit">
            Gönder
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
