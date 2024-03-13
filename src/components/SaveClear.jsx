function SaveClear({handleClick}) {
    return(
        <div className="w-full flex justify-evenly px-1.5">
            <button className="text-white bg-red-800 p-1 px-2 rounded-2xl active:bg-slate-300">Save</button>
            <button className="text-white bg-red-800 p-1 px-2 rounded-2xl active:bg-slate-300" onClick={handleClick}>Reset</button>
        </div>
    )
}

export default SaveClear;
