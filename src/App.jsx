import Information from "./components/Information.jsx";

function App() {
  return (
    <div className=" min-h-screen bg-slate-800 px-4 py-4">
      <div className=" flex flex-col gap-4">
      {["general",
       "education", 
       "experience"
       ].map((item, index) => <Information key = {index} name = {item}></Information>)}
     </div>
    </div>
  );
}

export default App;
