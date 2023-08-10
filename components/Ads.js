import Image from "next/image";
import React from "react";

const Ads = ({ src, url }) => {
  return (
    <a href={url} className="hidden sm:inline-flex pr-2">
      <div className="flex items-center space-x-4 py-2 px-2 hover:bg-gray-200 rounded-md">
        <Image
          src={src}
          height={140}
          width={140}
          className="rounded-md cursor-pointer"
        />
        <p className="text-sm">{new URL(url).hostname}</p>
      </div>
    </a>
  );
};

export default Ads;
