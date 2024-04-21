function InfoContainer(props) {
  return (
    <div className="w-[33%] min-h-[880px] max-h-[880px] bg-white p-2 flex flex-col">
      <div className="flex flex-col justify-center break-words w-[100%]">
        <div className = "flex justify-center">
          <p className="font-bold text-2xl">{props.fullName}</p>
        </div>
        <div>
          <p>{props.address}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoContainer;
