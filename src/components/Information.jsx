import InputForm from "./InputForm";
import Preview from "./Preview";
import SaveClear from "./SaveClear";
import { useState } from "react";

function Information({ name }) {
  const [value, setValue] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [string4, setString4] = useState("");
  const [string5, setString5] = useState("");
  const [number, setNumber] = useState(1900);

  function handleChange1(e) {
    console.log(e.target.value);
    setFirstName(e.target.value);
  }

  function handleChange2(e) {
    console.log(e.target.value);
    setLastName(e.target.value);
  }

  function handleChange3(e) {
    console.log(e.target.value);
    setAge(e.target.value);
  }

  function handleChange4(e) {
    console.log(e.target.value);
    setString4(e.target.value);
  }

  function handleChange5(e) {
    console.log(e.target.value);
    setString5(e.target.value);
  }

  function handleChange6(e) {
    console.log(e.target.value);
    setNumber(e.target.value);
  }

  function handleClick() {
    setValue(!value);
  }

  function handleClick2() {
    setFirstName("");
    setLastName("");
    setAge("");
  }

  function handleClick3() {
    setString4("");
    setString5("");
    setNumber(1900);
  }

  return (
    <div
      className="flex flex-col w-64 rounded-xl border-solid
   border-white border-2 items-center justify-center p-2 gap-y-2"
    >
      {name === "general" ? (
        <>
          <Preview name="General" value={value} handleClick={handleClick} />

          {value === true ? (
            <>
              {["First Name", "Last Name", "Age"].map((item, index) => {
                if (index === 0) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      string={firstName}
                      handleChange={handleChange1}
                    />
                  );
                } else if (index === 1) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      string={lastName}
                      handleChange={handleChange2}
                    />
                  );
                } else if (index === 2) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      string={age}
                      handleChange={handleChange3}
                    />
                  );
                }
              })}
              <SaveClear handleClick={handleClick2} />
            </>
          ) : null}
        </>
      ) : name === "education" ? (
        <>
          <Preview name="Education" value={value} handleClick={handleClick} />
          {value === true ? (
            <>
              {[
                "Highschool",
                "University name",
                "Starting year",
                "Finishing year",
              ].map((item, index) => {
                if (index === 0) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      string={string4}
                      handleChange={handleChange4}
                    />
                  );
                } else if (index === 1) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      string={string5}
                      handleChange={handleChange5}
                    />
                  );
                } else if (index === 2) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      number={number}
                      handleNumberChange={handleChange6}
                    />
                  );
                }
              })}
              <SaveClear handleClick={handleClick3}/>
            </>
          ) : null}
        </>
      ) : name === "experience" ? (
        <>
          <Preview name="Experience" value={value} handleClick={handleClick} />
          {value === true ? (
            <>
              {[
                "Company name",
                "Starting year",
                "Finishing year",
                "Position",
              ].map((item, index) => {
                return <InputForm key={index} label={item} />;
              })}
              <SaveClear />
            </>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default Information;
