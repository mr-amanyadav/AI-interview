import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { loginUser } from "../api/authService";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(form);

      login(data);

      toast.success("Login Successful!");

      navigate("/");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

      <h1 className="text-3xl font-bold text-center mb-6">
        Login
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          className="w-full border rounded-lg p-3"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          className="w-full border rounded-lg p-3"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg p-3"
        >
          Login
        </button>

      </form>

      <p className="text-center mt-5">
        Don't have an account?

        <Link
          className="text-indigo-600 ml-2"
          to="/register"
        >
          Register
        </Link>
      </p>

    </div>
  );
}

export default LoginForm;