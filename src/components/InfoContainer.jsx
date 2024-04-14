function InfoContainer(props) {
    return (
        <div className="w-[33%] min-h-[880px] max-h-[880px] bg-white break-words p-2">
            <div>
                <p>{props.fullName}</p>
                <p>{props.address}</p>
                <p>{props.email}</p>
                <p>{props.phoneNumber}</p>
                <p>{props.professionalStatement}</p>
            </div>
        </div>
    )
}

export default InfoContainer;