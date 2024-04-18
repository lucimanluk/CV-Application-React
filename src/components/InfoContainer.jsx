function InfoContainer(props) {
    return (
        <div className="w-[33%] min-h-[880px] max-h-[880px] bg-white p-2">
            <div className="flex flex-col justify-center">
                <div className="break-words w-[33%]">
                <p className="font-bold text-2xl">{props.fullName}</p>
                </div>
                <div>
                <p>{props.address}</p>
                <p>{props.email}</p>
                <p>{props.phoneNumber}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoContainer;