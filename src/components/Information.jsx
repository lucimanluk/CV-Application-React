import InputForm from "./InputForm";
import Preview from "./Preview";
import SaveClear from "./SaveClear";
import { useEffect, useState } from "react";

function Information({ name }) {
  const [value, setValue] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [highschool, setHighschool] = useState("");
  const [university, setUniversity] = useState("");
  const [number, setNumber] = useState(1900);
  const [number2, setNumber2] = useState(1900);
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [number3, setNumber3] = useState(1900);
  const [number4, setNumber4] = useState(1900);

  function handleClick() {
    setValue(!value);
  }

  return (
    <div
      className="flex flex-col w-64 rounded-xl border-solid
   border-white border-2 items-center justify-center p-2 gap-y-2 bg-white"
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
                      handleChange={(e) => { setFirstName(e.target.value) }}
                    />
                  );
                } else if (index === 1) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      string={lastName}
                      handleChange={(e) => { setLastName(e.target.value) }}
                    />
                  );
                } else if (index === 2) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      string={age}
                      handleChange={(e) => { setAge(e.target.value) }}
                    />
                  );
                }
              })}
              <SaveClear handleClick={() => {
                setFirstName("");
                setLastName("");
                setAge("");
              }}
              />
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
                      string={highschool}
                      handleChange={(e) => { setHighschool(e.target.value) }}
                    />
                  );
                } else if (index === 1) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      string={university}
                      handleChange={(e) => { setUniversity(e.target.value) }}
                    />
                  );
                } else if (index === 2) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      number={number}
                      handleNumberChange={(e) => {
                        const newValue = e.target.value;
                        setNumber(e.target.value);
                        if (number2 <= newValue)
                          setNumber2(e.target.value);
                      }}
                    />
                  );
                } else if (index === 3) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      number={number2}
                      handleNumberChange={(e) => { setNumber2(e.target.value) }}
                    />
                  )
                }
              })}
              <SaveClear handleClick={() => {
                setHighschool("");
                setUniversity("");
                setNumber(1900);
                setNumber2(1900);
              }}
              />
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
                "Position",
                "Starting year",
                "Finishing year"
              ].map((item, index) => {
                if (index === 0) {
                  return <InputForm
                    key={index}
                    label={item} s
                    tring={company}
                    handleChange={(e) => { setCompany(e.target.value) }}
                  />;
                }
                else if (index === 1) {
                  return <InputForm
                    key={index}
                    label={item}
                    string={position}
                    handleChange={(e) => { setPosition(e.target.value) }}
                  />;
                }
                else if (index === 2) {
                  return <InputForm
                    key={index}
                    label={item}
                    number={number3}
                    handleNumberChange={(e) => {
                      const newValue = e.target.value;
                      setNumber3(e.target.value);
                      if (number4 <= newValue)
                        setNumber4(e.target.value);
                    }}
                  />;
                }
                else if (index === 3) {
                  return <InputForm
                    key={index}
                    label={item}
                    number={number4}
                    handleNumberChange={(e) => { setNumber4(e.target.value) }} />;
                }
              })}
              <SaveClear handleClick={() => {
                setCompany("");
                setPosition("");
                setNumber3(1900);
                setNumber4(1900);
              }}
              />
            </>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default Information;
