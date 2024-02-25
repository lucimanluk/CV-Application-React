import InputForm from "./inputForm";
import { useState } from "react";

function Information({ name }) {

  return (
    <div
      className="flex flex-col w-64 rounded-xl border-solid
   border-white border-2 items-center justify-center p-2 gap-y-2"
    >
      {name === "general" ? (
        <>
          <InputForm label="First Name" />
          <InputForm label="Last Name" />
          <InputForm label="Age" />
        <button onClick={handleClick}>{content}</button>
        </>
      ) : name === "education" ? (
        <>
          <InputForm label="Highschool" />
          <InputForm label="University name" />
          <InputForm label="Starting year" />
          <InputForm label="Finishing year" />
          <button onClick={handleClick}>{content}</button>
        </>
      ) : name === "experience" ? (
        <>
          <InputForm label="Company name" />
          <InputForm label="Starting year" />
          <InputForm label="Finishing year" />
          <InputForm label="Position" />
          <button onClick={handleClick}></button>
        </>
      ) : null}
    </div>
  );
}

export default Information;
