function InputForm({label, handleChange, string}) {
  return (
    <form className="flex flex-col w-56">
      <label htmlFor={label} className="text-white">
        {label}
      </label>
      {label === "Starting year" || label === "Finishing year" ? (
        <select name="year" id="year" className="rounded-md">
          {[...Array(2025 - 1900)].map((_, index) => {
            const year = 1900 + index;
            return <option key={year}>{year}</option>;
          })}
        </select>
      ) : (
        <input type="text" className="rounded-md px-1" id={label}  onChange={handleChange}></input>
      )}
    </form>
  );
}

export default InputForm;
