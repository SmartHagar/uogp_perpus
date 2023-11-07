/** @format */
import React from "react";

type Props = {};

const FooterComp = (props: Props) => {
  return (
    <div className="py-4 bg">
      <p className="text-center text-sm">
        Copyright © 2023. All rights reserved.
      </p>
      <p className="text-center text-sm">
        {/* link fstuogp.com */}
        Powered by:
        <a href="https://fstuogp.com" target="_blank">
          <span className="text-primary"> FSTUOGP</span>
        </a>
      </p>
    </div>
  );
};

export default FooterComp;
