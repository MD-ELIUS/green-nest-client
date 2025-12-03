import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialEmail = location.state?.email || "";
  const [email, setEmail] = useState(initialEmail);

  useEffect(() => {
    setEmail(initialEmail);
  }, [initialEmail]);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }

   
    toast.success(`Reset link sent to ${email}`);
  

   
    setEmail("");
    setTimeout(() => {
      window.open("https://mail.google.com", "_blank");
    //   navigate("/login");
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 px-4">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
          Forgot Password
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Enter your registered email below. We’ll send a password reset link to your Gmail.
        </p>

        <form onSubmit={handleReset} className="flex flex-col gap-4">
          <label className="text-left font-medium text-gray-700 text-sm sm:text-base">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-green-500  outline-none rounded-lg p-3 text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-primary text-white py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary/90 transition-all duration-300 cursor-pointer"
          >
            Reset Password
          </button>
        </form>

        <p
          onClick={() => navigate("/login")}
          className="text-green-600 hover:underline cursor-pointer mt-6 text-sm sm:text-base"
        >
          Back to Login
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
