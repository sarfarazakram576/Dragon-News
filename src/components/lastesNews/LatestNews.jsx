import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="mt-8 bg-base-200 py-3 px-4 flex gap-6 items-center">
      <p className="bg-secondary px-4 py-2 text-white">Latest</p>

      <Marquee delay={1} speed={60} pauseOnHover={true}>
        <div className="flex gap-6">
          <p className="font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo eligendi accusamus aut enim commodi? Recusandae beatae qui eum possimus autem.</p>
          <p className="font-bold">Amet consectetur adipisicing elit. Reiciendis id ipsa adipisci modi quisquam facere soluta recusandae repellat eius. Quos.</p>
          <p className="font-bold">Sit amet consectetur adipisicing elit. Reiciendis id ipsa adipisci modi quisquam facere soluta recusandae repellat eius. Quos.</p>
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
