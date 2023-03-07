import React from "react";
import Image from "next/image";

const UserDropdown = () => {
  return (
    <>
      <div className="items-center flex">
        <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
          <Image
            className="w-full rounded-full align-middle border-none shadow-lg"
            src="/images/profile-photo.jpg"
            width="48"
            height="48"
            alt=""
          />
        </span>
      </div>
    </>
  );
};

export default UserDropdown;
