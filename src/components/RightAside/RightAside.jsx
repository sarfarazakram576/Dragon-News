import React from "react";
import SocialLogin from "../socialLogin/SocialLogin";
import FindUs from "../findUs/FindUs";
import QZone from "../QZone/QZone";

const RightAside = () => {
  return (
    <div>
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <QZone></QZone>
      <img className="mt-6" src="https://i.ibb.co.com/WpKXkzKf/bg.png" alt="" />
    </div>
  );
};

export default RightAside;
