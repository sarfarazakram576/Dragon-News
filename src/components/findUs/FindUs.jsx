import React from "react";
import { Link } from "react-router";

const FindUs = () => {
  return (
    <div className="mt-8">
      <h2 className="font-bold mb-4">Find Us On</h2>
      <div className="join join-vertical w-full">
        <Link to="https://web.facebook.com/" target="_blank">
          <button className="btn join-item w-full py-6 bg-white flex justify-start gap-2 items-center">
            <img
              className="px-2 py-1 bg-base-200 rounded-full"
              src="https://i.ibb.co.com/W4nPDrW0/fb.png"
              alt=""
            />{" "}
            Facebook
          </button>
        </Link>

        <Link to="https://x.com/" target="_blank">
          <button className="btn join-item w-full py-6 bg-white flex justify-start gap-2 items-center">
            <img
              className="p-1 bg-base-200 rounded-full"
              src="https://i.ibb.co.com/fz0Pf3LP/twitter.png"
              alt=""
            />{" "}
            Twitter
          </button>
        </Link>
        <Link to="https://www.instagram.com/" target="_blank">
          <button className="btn join-item w-full py-6 bg-white flex justify-start gap-2 items-center">
            <img
              className="p-1 bg-base-200 rounded-full"
              src="https://i.ibb.co.com/N6DxQcPz/instagram.png"
              alt=""
            />{" "}
            Instagram
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FindUs;
