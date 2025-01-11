import React from "react";
import BasicSelect from "../../components/landing/Avatar";
import LoginBox from "../../components/login/loginbox";

const Login = () => {
  return (
    <>
      <BasicSelect />
      <div className="flex items-center justify-center h-screen bg-gray-100 font-manrope">
        <div className="flex flex-col w-full h-full lg:flex-row screen ">
          {/* Left Side - Introductory Content with Elliptical Background */}
          <div className="relative flex flex-col bg-[#1c2634] font-['Manrope'] text-white w-full lg:w-1/2 p-8 lg:p-20 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1c3a4f] rounded-full opacity-50"></div>
              <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#1c3a4f] rounded-full opacity-40"></div>
              <div className="absolute bottom-[-200px] left-[-200px] w-[700px] h-[650px] bg-[#1c3a4f] rounded-full opacity-30"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-start items-start gap-10 h-auto md:h-[433.18px]">
              {/* <img className="w-[100px] h-auto" src="/assets/logo.png" alt="Logo" /> */}
              <div className="flex flex-col items-start justify-start gap-6 mx-auto">
                <div className="w-full md:w-[650px] text-white text-2xl md:text-6xl font-medium leading-snug md:leading-tight">
                  HACKATHON 2024 TEST FEATURE
                </div>
                <div className="text-gray-300">Supporting US to MAP.</div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex flex-col justify-between w-full p-8 bg-white lg:w-1/2">
            <div className="flex items-center justify-center flex-grow">
              <LoginBox />
            </div>
            <div className="mt-8 text-center">
              <p>&copy; DBS TEAM. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
