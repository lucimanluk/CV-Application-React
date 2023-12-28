function InputForm({label}) {

    return(
        <form className="flex flex-col w-56">
        <label htmlFor = {label} className = "text-white">{label}</label>
        <input type = "text" className = "rounded-md" id = {label}></input>
        </form>
    )
}

export default InputForm;