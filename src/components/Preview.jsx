function Preview({ name, handleClick, value }) {

  return (
    <div className="w-full flex justify-between px-1.5">
      <h1 className="text-white">{name}</h1>
      <button onClick={handleClick}>
        {value === false ? (
          <img src="./../public/assets/expand.png"  className="w-5 h-5 text-white">
          </img>
        ) : value === true ? (
          <img src="./../public/assets/condense.png" className="w-5 h-5"></img>
        ) : null}
      </button>
    </div>
  );
}

export default Preview;
