import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const HandelFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full md:h-[80vh] h-[70vh] flex items-center justify-center">
      <form
        onSubmit={HandelFormSubmit}
        className="w-full md:w-96 bg-slate-50 rounded-lg p-5 my-10 md:my-0 shadow-xl"
      >
        <h1 className="text-gray-700 font-semibold text-lg">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h1>
        <p className="text-gray-700 text-sm pb-3">
          {state === "Sign Up"
            ? "Please sign up to book appointment"
            : "Please login to book appointment"}
        </p>
        {state === "Sign Up" ? (
          <div className="flex flex-col py-2">
            <label className="text-zinc-700 font-semibold text-sm">
              Full Name
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs"
            />
          </div>
        ) : (
          <></>
        )}
        <div className="flex flex-col py-2">
          <label className="text-zinc-700 font-semibold text-sm">Email</label>
          <input
            type="email"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="text-zinc-700 font-semibold text-sm">
            Password
          </label>
          <input
            type="password"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <div className="py-2">
          <button className="btn bg-primary text-white w-full hover:bg-primary">
            {state === "Sign Up" ? " Create account" : "Login"}
          </button>
        </div>
        {state === "Sign Up" ? (
          <div className="text-zinc-600 text-sm py-2">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary cursor-pointer font-semibold"
            >
              Login here
            </span>
          </div>
        ) : (
          <div className="text-zinc-600 text-sm py-2">
            Dont have an Account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary cursor-pointer font-semibold"
            >
              Sign Up
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
