import React from "react";
import {Puff} from "react-loader-spinner";  

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <Puff
    height="80"
    width="80"
    radius={1}
    color="#4fa94d"
    ariaLabel="puff-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
  }