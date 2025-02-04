import React from "react";

const Image: React.FC = () => {
  return (
    <div className="overflow-hidden border-white border-2 h-[300px] w-[300px] rounded-full max-xl:">
      <img
        src="./IMG_8187.JPG"
        alt="Image"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default Image;
