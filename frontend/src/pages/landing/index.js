import React from "react";
import AuthAvatar from "../../components/landing/Avatar";
import SummaryTiles from "../../components/landing/SummaryTiles";
import MyDataTable from "../../components/landing/myDataTable";

const LandingPage = () => {
  return (
    <div className="flex justify-center h-screen pt-6 bg-gray-100 font-manrope">
      <div className="flex flex-col gap-4 p-4 col-span-full md:col-span-3 lg:col-span-3">
        <AuthAvatar />
        <SummaryTiles />
        <MyDataTable />
      </div>
    </div>
  );
};

export default LandingPage;
