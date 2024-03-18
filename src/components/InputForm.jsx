function InputForm({label, handleChange, string, number, handleNumberChange, nr}) {

  return (
    <form className="flex flex-col w-56">
      <label htmlFor={label} className="text-black">
        {label}
      </label>
      {label === "Starting year" ?(
     <select  className="rounded-md border-gray-400 border-2" name="year" id="year" value = {number} onChange = {handleNumberChange}>
          {[...Array(2025 - 1900)].map((_, index) => {
            const year = 1900 + index;
              return <option key={year} value={year}>{year}</option>;       
          })}
        </select>
      ) : label === "Finishing year" ? (
        <select  className="rounded-md border-gray-400 border-2" name="year" id="year" value = {nr} onChange = {handleNumberChange}>
          {[...Array(2025 - 1900)].map((_, index) => {
            const year = 1900 + index;
              return <option key={year} value={year}>{year}</option>;       
          })}
        </select>
      ) : (
        <input type="text" className="rounded-md border-gray-400 border-2 px-1" id={label} value={string} onChange={handleChange}></input>
      )}
    </form>
  );
}

export default InputForm;
