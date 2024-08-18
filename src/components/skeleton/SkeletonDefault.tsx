/** @format */

import React from "react";

type Props = {};

const SkeletonDefault = (props: Props) => {
  return (
    <div className="w-full h-full">
      <div className="w-full rounded-lg p-4">
        <div className="flex gap-2">
          <div className="w-16 h-16 shrink-0 bg-gray-600 rounded-full animate-pulse"></div>
          <div className="w-full space-y-2">
            <div className="w-11/12 h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
            <div className="w-full h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4">
          <div className="w-3/5 h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
          <div className="w-5/6 h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
          <div className="w-3/4 h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
          <div className="w-full h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
          <div className="w-3/5 h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
          <div className="w-3/4 h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
          <div className="w-full h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
          <div className="w-11/12 h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDefault;
