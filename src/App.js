import { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const memberKadir = {
    isim: "Kadir",
    soyad: "Koskulu",
    mail: "kadir@hotmail.com",
    görev: "terzi",
  };

  const memberFurkan = {
    isim: "Furkan",
    soyad: "Akgul",
    mail: "furkan@hotmail.com",
    görev: "backend developer",
  };

  const [members, setMember] = useState([
    {
      isim: "Burak",
      soyad: "Torun",
      mail: "burak@hotmail.com",
      görev: "developer",
    },
    memberKadir,
    memberFurkan,
  ]);

  function memberA(newMb) {
    const newMst = [...members, newMb];
    setMember(newMst);
    console.log(newMst);
  }

  return (
    <div className="App">
      <Form handleSubmitCb={memberA} />
    </div>
  );
}

export default App;
