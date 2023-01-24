import React from "react";
import avatarVictor from "../assets/images/image-victor.jpg";

export default function ProfileCard() {
  return (
    <div className="profile-card text-center">
      {/* container */}
      <div className="h-screen flex justify-center items-center">
        {/* card */}
        <div className="relative bg-white rounded-xl box-border overflow-hidden md:w-[350px] w-[327px] md:h-[375px] h-[376px] flex flex-col">
          {/* 1 hero pattern */}
          <div className="bg-[url(../assets/images/bg-pattern-card.svg)] w-full h-[140px] bg-no-repeat flex flex-initial"></div>
          {/* avatar */}
          <div className="flex absolute w-full justify-center mt-[89px]">
            <img
              src={avatarVictor}
              alt="victor"
              className="rounded-full border-[5px] border-white"
            />
          </div>
          {/* 2 profile content */}
          <div className="divide-y flex flex-auto flex-col relative mt-[70px] gap-4 box-border">
            {/* profile content container */}
            {/* profile content top */}
            <div className="capitalize">
              <div>
                <h1 className="font-bold">
                  victor crest{" "}
                  <span className="font-normal text-c-darkGrayishBlue">26</span>
                </h1>
              </div>
              <div>
                <span className="text-sm text-c-darkGrayishBlue">london</span>
              </div>
            </div>
            {/* profile content bottom */}
            <div>
              {/* 3 stats  */}
              <div className="flex flex-row justify-between capitalize px-10 py-5">
                <div>
                  <h2 className="uppercase font-bold">80k</h2>
                  <span className="text-sm text-c-darkGrayishBlue">
                    followers
                  </span>
                </div>
                <div>
                  <h2 className="uppercase font-bold">803k</h2>
                  <span className="text-sm text-c-darkGrayishBlue">likes</span>
                </div>
                <div>
                  <h2 className="uppercase font-bold">1.4k</h2>
                  <span className="text-sm text-c-darkGrayishBlue">photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
