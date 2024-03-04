import Information from "./components/Information.jsx";

function App() {
  return (
    <div className=" min-h-screen bg-slate-800">
      <div className=" flex flex-col rounded-none gap-4">
      {["general",
       "education", 
       "experience"
       ].map((item) => <Information name = {item}></Information>)}
     </div>
    </div>
  );
}

export default App;
