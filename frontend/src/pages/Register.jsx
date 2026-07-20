import RegisterForm from "../components/RegisterForm";
import bg from "../assets/login.png"

function Register() {
  return (
     <div
  className="min-h-screen bg-cover bg-center flex justify-center lg:justify-start items-center"
  style={{ backgroundImage: `url(${bg})` }}
>
  <div className="w-full max-w-md lg:ml-40">
    
<RegisterForm />
  </div>
</div>
  );
}




export default Register;