import Information from "./components/Information.jsx";
import InfoContainer from "./components/InfoContainer.jsx";
import { useState } from "react";
function App() {

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [professionalStatement, setProfessionalStatement] = useState("");
  const [highschool, setHighschool] = useState("");
  const [university, setUniversity] = useState("");
  const [number, setEducationStartingYear] = useState(1900);
  const [number2, setEducationFinishingYear] = useState(1900);
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [number3, setNumber3] = useState(1900);
  const [number4, setNumber4] = useState(1900);
  const [passedFullName, setPassedFullName] = useState('');
  const [passedAddress, setPassedAddress] = useState('');
  const [passedEmail, setPassedEmail] = useState('');
  const [passedPhoneNumber, setPassedPhoneNumber] = useState('');
  const [passedProfessionalStatement, setPassedProfessionalStatement] = useState('');

  function saveGeneralContent() {
    setPassedFullName(fullName);
    setPassedAddress(address);
    setPassedEmail(email);
    setPassedPhoneNumber(phoneNumber);
  }

  function saveProfessionalStatement() {
    setPassedProfessionalStatement(professionalStatement);
  }

  return (
    <div>
      <div className="min-h-screen py-2 flex flex-row bg-gray-600 justify-center gap-8">
        <div className=" flex flex-col gap-4">
          {
            ["personal information",
             "Professional statement",
              "education",
              "experience"
            ].map((item, index) => {
              if (item === "personal information") {
                return <Information
                  key={index}
                  name={item}
                  fullName={fullName}
                  address={address}
                  email={email}
                  phoneNumber={phoneNumber}
                  setFullName={setFullName}
                  setAddress={setAddress}
                  setEmail={setEmail}
                  setPhoneNumber={setPhoneNumber}
                  saveButton={saveGeneralContent}
                ></Information>
              }
              else if (item === "Professional statement") {
                return <Information
                key = {index}
                name = {item}
                professionalStatement = {professionalStatement}
                setProfessionalStatement = {setProfessionalStatement}
                saveButton = {saveProfessionalStatement}
                ></Information>
              }
              else if (item === "education") {
                return <Information
                  key={index}
                  name={item}
                  highschool={highschool}
                  university={university}
                  number={number}
                  number2={number2}
                  setHighschool={setHighschool}
                  setUniversity={setUniversity}
                  setNumber={setEducationStartingYear}
                  setNumber2={setEducationFinishingYear}
                ></Information>
              }
              else if (item === "experience") {
                return <Information
                  key={index}
                  name={item}
                  company={company}
                  position={position}
                  number3={number3}
                  number4={number4}
                  setCompany={setCompany}
                  setPosition={setPosition}
                  setNumber3={setNumber3}
                  setNumber4={setNumber4}
                ></Information>
              }
            }
            )}
        </div>
        <InfoContainer fullName={passedFullName} address={passedAddress} email={passedEmail} phoneNumber={passedPhoneNumber} professionalStatement = {passedProfessionalStatement}/>
      </div>
    </div>
  );
}

export default App;
