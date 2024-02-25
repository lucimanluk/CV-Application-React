import Information from "./components/Information.jsx";

function App() {
  return (
    <div className=" min-h-screen flex flex-col m-0 rounded-none bg-slate-800 gap-4 p-2">
      {/*{["general", "education", "experience"].map((item) => <Information name = item></Information>)}*/}
      <Information name="general" />
      <Information name="education" />
      <Information name="experience" />
    </div>
  );
}

export default App;
