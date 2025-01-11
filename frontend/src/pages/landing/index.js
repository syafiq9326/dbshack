import React, { useEffect, useState } from "react";
import AuthAvatar from "../../components/landing/Avatar";
import SummaryTiles from "../../components/landing/SummaryTiles";
import MyDataTable from "../../components/landing/myDataTable";
import { getCompanyDetails } from "../../services/userServices";

const LandingPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await getCompanyDetails("6782034e252e9e64821a669f");
      setData(res.data);
    };
    fetchDetails();
  }, []);
  console.log(data);
  return (
    <div className="flex justify-center h-screen pt-6 bg-gray-100 font-manrope">
      <div className="flex flex-col gap-4 p-4 col-span-full md:col-span-3 lg:col-span-3">
        <AuthAvatar />
        {data && <SummaryTiles details={data} />}
        <MyDataTable />
      </div>
    </div>
  );
};

export default LandingPage;
