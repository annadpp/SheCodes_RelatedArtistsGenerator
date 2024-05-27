import React from "react";
import SvgIcon from "./SvgIcon";
import Fetching from "./Fetching";
import Starter from "./Starter";

export default function Loader({ loading, hasData }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative">
      <SvgIcon loading={loading} />
      <div className="uppercase flex flex-col justify-center items-center h-full z-20">
        {loading ? <Fetching /> : !hasData && <Starter />}
      </div>
    </div>
  );
}
