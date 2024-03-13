import Information from "./components/Information.jsx";
import InfoContainer from "./components/InfoContainer.jsx";

function App() {
  return (
    <div className="min-h-screen px-4 py-2 flex flex-row bg-gray-600">
      <div className=" flex flex-col gap-4">
      {["general",
       "education", 
       "experience"
       ].map((item, index) => <Information key = {index} name = {item}></Information>)}
   
    </div>
    <InfoContainer/>
    </div>
  );
}

export default App;
