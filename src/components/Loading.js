import React from "react";
import loading from "./loading.gif";

const Loading = () => {
  return (
    <div className="text-center">
      <div>
        <img className="text-center" src={loading} alt="loading" />
      </div>
    </div>
  );
};

export default Loading;
