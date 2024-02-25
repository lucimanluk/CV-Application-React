import InputForm from "./InputForm";
import Preview from "./Preview";

function Information({ name }) {
  return (
    <div
      className="flex flex-col w-64 rounded-xl border-solid
   border-white border-2 items-center justify-center p-2 gap-y-2"
    >
      {name === "general" ? (
        <>
          <Preview name="General" />
          {["First Name", "Last Name", "Age"].map((item) => {
            return <InputForm label={item} />;
          })}
        </>
      ) : name === "education" ? (
        <>
          <Preview name="Education" />
          {[
            "Highschool",
            "University name",
            "Starting year",
            "Finishing year",
          ].map((item) => {
            return <InputForm label={item} />;
          })}
        </>
      ) : name === "experience" ? (
        <>
          <Preview name="Experience" />
          {["Company name", "Starting year", "Finishing year", "Position"].map(
            (item) => {
              return <InputForm label={item} />;
            }
          )}
        </>
      ) : null}
    </div>
  );
}

export default Information;
