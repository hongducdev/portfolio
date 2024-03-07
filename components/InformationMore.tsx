import React from "react";
import { Icon2 } from "./Icon";

const InformationMore = () => {
  return (
    <section className="flex gap-2">
      <div className="basis-2/5 bg-ctp-surface0 px-12 py-10 rounded-3xl">
        <Icon2 />
        <h2 className="font-medium text-[56px] leading-none mt-8">
          Based in
          <br />
          Thai Nguyen,
          <br />
          Viet Nam. <span className="text-ctp-overlay1">GMT+7</span>
        </h2>
      </div>
      <div className="basis-3/5 bg-ctp-surface0 px-12 py-10 rounded-3xl">
        <h3 className="font-medium text-5xl">
          Hi, my name is hongducdev. Full name is Nguyen Hong Duc. I am a 4th
          year student majoring in Software Engineering at ICTU.{" "}
          <span className="text-ctp-overlay1">
            I am a Front end developer and am striving to become a Fullstack
            developer.
          </span>
        </h3>
      </div>
    </section>
  );
};

export default InformationMore;
