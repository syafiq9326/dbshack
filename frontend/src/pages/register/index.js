import React from "react";
import RegisterPage from "../../components/register/myRegistration";

const LandingPage = () => {
  return (
    <div className="flex justify-center h-screen pt-6 bg-gray-100 font-manrope">
      <div className="flex flex-col gap-4 p-4 col-span-full md:col-span-3 lg:col-span-3">
        <RegisterPage />
      </div>
    </div>
  );
};

export default LandingPage;
