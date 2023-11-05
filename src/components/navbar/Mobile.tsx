/** @format */

import React, { FC } from "react";

type Props = {};

const Mobile: FC<Props> = () => {
  return (
    <ul className="menu bg-base-200 w-full rounded-box">
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <details open>
          <summary>Parent</summary>
          <ul>
            <li>
              <a>level 2 item 1</a>
            </li>
            <li>
              <a>level 2 item 2</a>
            </li>
            <li>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li>
                    <a>level 3 item 1</a>
                  </li>
                  <li>
                    <a>level 3 item 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  );
};

export default Mobile;
