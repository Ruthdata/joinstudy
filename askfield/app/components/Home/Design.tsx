import React from "react";
import Image from "next/image";

const Design = () => {
  return (
    <div>
      <Image
        src="/images/home/Design-image.svg"
        alt="Design Illustration"
        width={600}
        height={400}
        className="object-cover"
      />
    </div>
  );
};

export default Design;
