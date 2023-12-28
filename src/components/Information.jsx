import InputForm from "./InputForm";

function Information({ name }) {
  if (name === "general") return (
  <div className="flex flex-col w-56">
    <InputForm label = "First Name"/>
    <InputForm label = "Last Name"/>  
    <InputForm label = "Email"/>
    <InputForm label = "Phone number"/>
  </div>
  )
  else if (name === "education") return (
    <div className="flex flex-col w-56">
      <InputForm label = "high school"/>
      <InputForm label = "University"/>  
      <InputForm label = "Starting year"/>
      <InputForm label = "Finishing year"/>
    </div>
    )
   else if (name === "experience") return (
      <div className="flex flex-col w-56">
        <InputForm label = "First job"/>
        <InputForm label = "Last Name"/>  
        <InputForm label = "Email"/>
        <InputForm label = "Phone number"/>
      </div>
      )
}

export default Information;
