import React, { useState, useEffect } from "react";
import "./castedInfo.css";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import { userCall } from "../../urlCalls";

export default function CastedInfo() {
  const [earning, setEarning] = useState([]);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const getEarning = async () => {
      try {
        const res = await userCall.get("orders/earning");
        setEarning(res.data);
        setPercent((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getEarning();
  }, []);

  return (
    <div className="casted">
      <div className="castedItem">
        <span className="castedTitle">Revenue</span>
        <div className="castedMoneyContainer">
          <span className="castedMoney">${earning[1]?.total}</span>
          <span className="castedMoneyRate">
            %{Math.floor(percent)}{" "}
            {percent < 0 ? (
              <ArrowDropDown className="castedIcon negative" />
            ) : (
              <ArrowDropUp className="castedIcon positive" />
            )}
          </span>
        </div>
        <span className="castedSub">Compared to previous month</span>
      </div>
      <div className="castedItem">
        <span className="castedTitle">Sales</span>
        <div className="castedMoneyContainer">
          <span className="castedMoney">$1250</span>
          <span className="castedMoneyRate">
            -12.5 <ArrowDropDown className="castedIcon negative" />
          </span>
        </div>
        <span className="castedSub">Compared to previous quarter</span>
      </div>
      <div className="castedItem">
        <span className="castedTitle">Cost</span>
        <div className="castedMoneyContainer">
          <span className="castedMoney">$1100</span>
          <span className="castedMoneyRate">
            -11.0 <ArrowDropUp className="castedIcon positive" />
          </span>
        </div>
        <span className="castedSub">Compared to previous month</span>
      </div>
    </div>
  );
}
