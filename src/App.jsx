import Information from "./components/Information.jsx";
import InfoContainer from "./components/InfoContainer.jsx";

function App() {
  return (
    <div>
    <div className="min-h-screen py-2 flex flex-row bg-gray-600 justify-center gap-8">
      <div className=" flex flex-col gap-4">
      {
      ["general",
       "education", 
       "experience"
       ].map((item, index) => <Information key = {index} name = {item}></Information>)}
    </div>
    <InfoContainer/>
    </div>
    </div>
  );
}

export default App;
