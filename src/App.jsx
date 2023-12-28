import Information from "./components/Information.jsx";

function App() {
  return (
    <div className="bg-slate-800 min-h-screen flex-1 flex-col m-0 rounded-none">
      {/*{["general", "education", "experience"].map((item) => <Information name = item></Information>)}*/}
      <Information name="general" />
      <Information name="education" />
      <Information name="experience" />
    </div>
  );
}

export default App;
