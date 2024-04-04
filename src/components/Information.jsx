import InputForm from "./InputForm";
import Preview from "./Preview";
import SaveClear from "./SaveClear";
import { useEffect, useState } from "react";

function Information(props) {

  return (
    <div
      className="flex flex-col w-64 rounded-xl border-solid
   border-white border-2 items-center justify-center p-2 gap-y-2 bg-white"
    >
      {props.name === "general" ? (
        <>
          <Preview name="General" value={props.value} handleClick={props.handleClick} />
          {props.value === true ? (
            <>
              {["First Name", "Last Name", "Age"].map((item, index) => {
                if (index === 0) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      string={props.firstName}
                      handleChange={(e) => { props.setFirstName(e.target.value) }}
                    />
                  );
                } else if (index === 1) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      string={props.lastName}
                      handleChange={(e) => { props.setLastName(e.target.value) }}
                    />
                  );
                } else if (index === 2) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      string={props.age}
                      handleChange={(e) => { props.setAge(e.target.value) }}
                    />
                  );
                }
              })}
              <SaveClear 
              handleClick={() => {
                props.setFirstName("");
                props.setLastName("");
                props.setAge("");
              }}
              handleClick2={() => {
                if(props.firstName != "" && props.lastName!= "" && props.age != ""){
                  console.log("You have saved the information!");
                }
                else {
                  console.log("You didn't fill all the fields!");
                }
              }}
              />
            </>
          ) : null}
        </>
      ) : props.name === "education" ? (
        <>
          <Preview name="Education" value={props.value} handleClick={props.handleClick} />
          {props.value === true ? (
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
                      string={props.highschool}
                      handleChange={(e) => { props.setHighschool(e.target.value) }}
                    />
                  );
                } else if (index === 1) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      string={props.university}
                      handleChange={(e) => { props.setUniversity(e.target.value) }}
                    />
                  );
                } else if (index === 2) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      number={props.number}
                      handleNumberChange={(e) => {
                        const newValue = e.target.value;
                        props.setNumber(e.target.value);
                        if (number2 <= newValue){
                          props.setNumber2(e.target.value);
                        }
                      }}
                    />
                  );
                } else if (index === 3) {
                  return (
                    <InputForm
                      key={index}
                      label={item}
                      nr={props.number2}
                      handleNumberChange={(e) => { if(props.number <= e.target.value) props.setNumber2(e.target.value) }}
                    />
                  )
                }
              })}
              <SaveClear handleClick={() => {
                props.setHighschool("");
                props.setUniversity("");
                props.setNumber(1900);
                props.setNumber2(1900);
              }}
              />
            </>
          ) : null}
        </>
      ) : props.name === "experience" ? (
        <>
          <Preview name="Experience" value={props.value} handleClick={props.handleClick} />
          {props.value === true ? (
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
                    label={item} 
                    tring={props.company}
                    handleChange={(e) => { props.setCompany(e.target.value) }}
                  />;
                }
                else if (index === 1) {
                  return <InputForm
                    key={index}
                    label={item}
                    string={props.position}
                    handleChange={(e) => { props.setPosition(e.target.value) }}
                  />;
                }
                else if (index === 2) {
                  return <InputForm
                    key={index}
                    label={item}
                    number={props.number3}
                    handleNumberChange={(e) => {
                      const newValue = e.target.value;
                      props.setNumber3(e.target.value);
                      if (number4 <= newValue) {
                        props.setNumber4(e.target.value);
                      } 
                    }}
                  />;
                }
                else if (index === 3) {
                  return <InputForm
                    key={index}
                    label={item}
                    nr={props.number4}
                    handleNumberChange={(e) => {if(props.number3 <= e.target.value) props.setNumber4(e.target.value) }} />;
                }
              })}
              <SaveClear handleClick={() => {
                props.setCompany("");
                props.setPosition("");
                props.setNumber3(1900);
                props.setNumber4(1900);
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
