import { format } from "date-fns";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 pt-6">
        <img
          src="https://i.ibb.co.com/XZjcnqjq/logo.png"
          alt=""
          className="w-[35%]"
        />
        <p className="text-sm text-accent">Journalism Without Fear or Favour</p>
        <p className="text-sm">{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
      </div>
    </div>
  );
};

export default Header;
