function InfoContainer(props) {
    return (
        <div className="w-[33%] min-h-[880px] max-h-[880px] bg-white flex flex-row">
            <div className="h-[100%] w-[60%]">
                <p>{props.firstName}</p>
                <p>{props.lastName}</p>
                <p>{props.age}</p>
            </div>
            <div className="h-[100%] w-[40%] bg-red-600">

            </div>
        </div>
    )
}

export default InfoContainer;