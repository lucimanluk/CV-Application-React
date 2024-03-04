import InputForm from "./InputForm";
import Preview from "./Preview";
import SaveClear from "./SaveClear";
import { useState } from "react";


function Information({ name }) {
  const [value, setValue] = useState(false);

  function handleClick() {
    setValue(!value);
  }

  return (
    <div
      className="flex flex-col w-64 rounded-xl border-solid
   border-white border-2 items-center justify-center p-2 gap-y-2"
    >
      {name === "general" ? (
        <>
          <Preview name="General" value={value} handleClick={handleClick} />

          {
            value === true ? (
              <>
                {["First Name",
                  "Last Name",
                  "Age"
                ].map((item, index) => {
                  return <InputForm key={index} label={item} />
                })}
                <SaveClear />
              </>
            ) : null
          }
        </>
      ) : name === "education" ? (
        <>
          <Preview name="Education" value={value} handleClick={handleClick} />
          {
            value === true ? (
              <>
                {[
                  "Highschool",
                  "University name",
                  "Starting year",
                  "Finishing year",
                ].map((item) => {
                  return <InputForm label={item} />;
                })}
                <SaveClear />
              </>
            ) : null}
        </>
      ) : name === "experience" ? (
        <>
          <Preview name="Experience" value={value} handleClick={handleClick} />
          {
            value === true ? (
              <>
                {[
                  "Company name",
                  "Starting year",
                  "Finishing year",
                  "Position"
                ].map(
                  (item) => {
                    return <InputForm label={item} />;
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
