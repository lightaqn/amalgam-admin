import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import CastedInfo from "../../components/castedInfo/CastedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { userCall } from "../../urlCalls";

export default function Home() {
  const [userMetrics, setUserMetrics] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getUserMetrics = async () => {
      try {
        const res = await userCall.get("/users/usermetrics");
        res.data.map((unit) => {
          setUserMetrics((prev) => [
            ...prev,
            { name: MONTHS[unit._id - 1], "Active User": unit.total },
          ]);
        });
      } catch {}
    };
    getUserMetrics();
  }, [MONTHS]);

  console.log(userMetrics);

  return (
    <div className="containerHome">
      <Navbar />
      <div className="smContainerHome">
        <Sidebar />
        <div className="home">
          <CastedInfo />

          <Chart
            data={userMetrics}
            title="User Analytics"
            grid
            dataKey="Active User"
          />
          <div className="homeWidgets">
            <WidgetLg />
            <WidgetSm />
          </div>
        </div>
      </div>
    </div>
  );
}
