import Information from "./components/Information.jsx";
import InfoContainer from "./components/InfoContainer.jsx";
import { useState } from "react";
function App() {

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
    <div>
      <div className="min-h-screen py-2 flex flex-row bg-gray-600 justify-center gap-8">
        <div className=" flex flex-col gap-4">
          {
            ["general",
              "education",
              "experience"
            ].map((item, index) => {
              if (item === "general") {
                return <Information
                  key={index}
                  name={item}
                  value={value}
                  handleClick={handleClick}
                  firstName={firstName}
                  lastName={lastName}
                  age={age}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setAge={setAge}
                ></Information>
              }
              else if (item === "education") {
                return <Information
                  key={index}
                  name={item}
                  value={value}
                  handleClick={handleClick}
                  highschool={highschool}
                  university={university}
                  number={number}
                  number2={number2}
                  setHighschool={setHighschool}
                  setUniversity={setUniversity}
                  setNumber={setNumber}
                  setNumber2={setNumber2}
                ></Information>
              }
                else if (item === "experience") {
                  return <Information
                  key={index}
                  name={item}
                  value={value}
                  handleClick={handleClick}
                  company = {company}
                  position = {position}
                  number3 = {number3}
                  number4 = {number4}
                  setCompany = {setCompany}
                  setPosition = {setPosition}
                  setNumber3 = {setNumber3}
                  setNumber4 = {setNumber4}
                ></Information>
                }
              }
            )}
        </div>
        <InfoContainer />
      </div>
    </div>
  );
}

export default App;
