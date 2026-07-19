import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";

import { registerUser } from "../api/authService";
import { useAuth } from "../context/AuthContext";

function RegisterForm() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [form, setForm] = useState({
    name: "",
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
      const data = await registerUser(form);

      login(data);

      toast.success("Account Created!");

      navigate("/");

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

      <h1 className="text-3xl font-bold text-center mb-6">
        Create Account
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg p-3"
        >
          Register
        </button>

      </form>

      <p className="text-center mt-5">

        Already have an account?

        <Link
          className="text-indigo-600 ml-2"
          to="/login"
        >
          Login
        </Link>

      </p>

    </div>
  );
}

export default RegisterForm;