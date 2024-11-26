import { useNavigate } from "react-router-dom";
import link from "../assets/login-page.png";
import { useState } from "react";
import { setToken, setUser } from "../store/slices/authSlice";
import { useDispatch } from "react-redux";

export const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const resp = await fetch(
        "https://backend-project-kv.onrender.com/api/v1/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const response = await resp.json();
      if (resp.ok) {
        dispatch(setToken(response.token));
        localStorage.setItem("token", JSON.stringify(response.token));
        dispatch(setUser(response.user));
        // console.log("Navigating to dashboard");
        navigate("/dashboard");
      } else {
        // console.log("Error in connecting ");
      }
    } catch (error) {
      // console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-[100%] max-w-[1500px]   min-h-[90vh]  flex justify-center items-center  ">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className=" border-red-950  p-2 flex justify-evenly  min-h-[700px] h-[100%] max-w-[1000px] w-[100%]">
          <div className=" border-green-800 max-w-[500px] w-[100%] flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="bg-[#e8d5f8] shadow-md  max-w-[500px] w-full flex flex-col gap-10 items-center  p-6 rounded-3xl h-[100%] text-2xl"
            >
              <h2 className="text-4xl  text-gray-800 mt-[100px]  text-center font-bold">
                Welcome Back
              </h2>
              <div className="w-full">
                <label className="block  font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="w-full">
                <label className="block  font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 cursor-pointer"
              >
                Sign In
              </button>
            </form>
          </div>

          <div className="hidden md:flex ml-4   max-w-[500px] w-[100%] relative">
            <div className="h-[100%] w-[100%] absolute">
              <img
                src={link}
                alt="logo"
                className="h-[100%] w-[100%] cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
