import React from "react";

export default function ProfileCard() {
  return (
    <div className="profile-card">
      {/* container */}
      <div className="h-screen flex justify-center items-center">
        {/* card */}
        <div className="bg-white rounded-xl box-border overflow-hidden">
          {/* 1 hero pattern */}
          <div></div>
          {/* avatar */}
          <div></div>
          {/* 2 profile content */}
          <div>
            {/* profile content container */}
            <div>
              <h1>
                name <span>age</span>
              </h1>
            </div>
            <div>
              <span>address</span>
            </div>
          </div>
          {/* 3 stats  */}
          <div>
            <div>
              <h2>stats</h2>
              <span>f</span>
            </div>
            <div>
              <h2>stats</h2>
              <span>l</span>
            </div>
            <div>
              <h2>stats</h2>
              <span>p</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
