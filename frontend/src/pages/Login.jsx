import LoginForm from "../components/LoginForm";
import bg from "../assets/login.png"

function Login() {
  return (
    <div
  className="min-h-screen bg-cover bg-center flex justify-center lg:justify-start items-center"
  style={{ backgroundImage: `url(${bg})` }}
>
  <div className="w-full max-w-md lg:ml-40">
    <LoginForm />
  </div>
</div>
  );
}

export default Login;